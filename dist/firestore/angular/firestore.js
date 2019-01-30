"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var firestore_1 = require("@angular/fire/firestore");
var json_1 = require("@co.mmons/js-utils/json");
var app_1 = require("firebase/app");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var __1 = require("../");
var collection_query_wrapper_1 = require("../collection-query-wrapper");
var document_wrapper_1 = require("../document-wrapper");
var rxjs_2 = require("../rxjs");
var write_batch_wrapper_1 = require("../write-batch-wrapper");
rxjs_2.injectUniversalFirestoreRxjs();
var CollectionOrQueryAngularWrapper = /** @class */ (function (_super) {
    __extends(CollectionOrQueryAngularWrapper, _super);
    function CollectionOrQueryAngularWrapper(firestore, collection, query) {
        var _this = _super.call(this, firestore, collection.ref, query) || this;
        _this.collection = collection;
        return _this;
    }
    CollectionOrQueryAngularWrapper.prototype.mutate = function (query) {
        return new CollectionOrQueryAngularWrapper(this.fakeFirestore, this.collection, query);
    };
    CollectionOrQueryAngularWrapper.prototype.doc = function (documentPath) {
        return new DocumentAngularWrapper(this.fakeFirestore, this.collection.doc(documentPath ? documentPath : this.fakeFirestore.createId()));
    };
    CollectionOrQueryAngularWrapper.prototype.get = function (options) {
        return new firestore_1.AngularFirestoreCollection(this.collection.ref, (this.query || this.collection.ref), this.fakeFirestore.realAngularFirestore).get(options).pipe(operators_1.first()).toPromise();
    };
    CollectionOrQueryAngularWrapper.prototype.onSnapshot = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var options = args.length > 1 && typeof args[0] != "function" ? args[0] : undefined;
        var observable = new rxjs_1.Observable(function (subscriber) {
            var unsubscribe = (_this.query || _this.ref).onSnapshot(options, subscriber);
            return { unsubscribe: unsubscribe };
        });
        var scheduled = this.fakeFirestore.realAngularFirestore.scheduler.keepUnstableUntilFirst(this.fakeFirestore.realAngularFirestore.scheduler.runOutsideAngular(observable));
        var subscription;
        if (args.length > 1 && typeof args[0] != "function") {
            if (typeof args[1] == "function") {
                subscription = scheduled.subscribe(args[1], args.length > 2 ? args[2] : undefined, args.length > 3 ? args[3] : undefined);
            }
            else {
                subscription = scheduled.subscribe(args[1]);
            }
        }
        else {
            subscription = scheduled.subscribe.apply(scheduled, args);
        }
        return function () { return subscription.unsubscribe(); };
    };
    return CollectionOrQueryAngularWrapper;
}(collection_query_wrapper_1.CollectionOrQueryWrapper));
exports.CollectionOrQueryAngularWrapper = CollectionOrQueryAngularWrapper;
var DocumentAngularWrapper = /** @class */ (function (_super) {
    __extends(DocumentAngularWrapper, _super);
    function DocumentAngularWrapper(firestore, doc) {
        var _this = _super.call(this, firestore, doc.ref) || this;
        _this.doc = doc;
        return _this;
    }
    DocumentAngularWrapper.prototype.collection = function (collectionPath) {
        return new CollectionOrQueryAngularWrapper(this.fakeFirestore, this.doc.collection(collectionPath));
    };
    DocumentAngularWrapper.prototype.get = function (options) {
        return this.doc.get(options).pipe(operators_1.first()).toPromise();
    };
    return DocumentAngularWrapper;
}(document_wrapper_1.DocumentWrapper));
exports.DocumentAngularWrapper = DocumentAngularWrapper;
var UniversalFirestoreAngularImpl = /** @class */ (function (_super) {
    __extends(UniversalFirestoreAngularImpl, _super);
    function UniversalFirestoreAngularImpl(realAngularFirestore) {
        var _this = _super.call(this) || this;
        _this.realAngularFirestore = realAngularFirestore;
        return _this;
    }
    UniversalFirestoreAngularImpl.prototype.collection = function (collectionPath) {
        return new CollectionOrQueryAngularWrapper(this, this.realAngularFirestore.collection(collectionPath));
    };
    UniversalFirestoreAngularImpl.prototype.doc = function (documentPath) {
        return new DocumentAngularWrapper(this, this.realAngularFirestore.doc(documentPath));
    };
    UniversalFirestoreAngularImpl.prototype.runTransaction = function (updateFunction) {
        return this.realAngularFirestore.firestore.runTransaction(updateFunction);
    };
    UniversalFirestoreAngularImpl.prototype.batch = function () {
        return new write_batch_wrapper_1.WriteBatchWrapper(this.realAngularFirestore.firestore.batch());
    };
    UniversalFirestoreAngularImpl.prototype.createId = function () {
        return this.realAngularFirestore.createId();
    };
    UniversalFirestoreAngularImpl.prototype.docsDataObservable = function (collectionPathOrQuery, options) {
        var _this = this;
        if (typeof collectionPathOrQuery == "string") {
            return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
        }
        if (!collectionPathOrQuery["path"]) {
            throw new Error("Not supported object: " + collectionPathOrQuery);
        }
        var ref = collectionPathOrQuery instanceof collection_query_wrapper_1.CollectionOrQueryWrapper ? collectionPathOrQuery.ref : collectionPathOrQuery;
        var query = collectionPathOrQuery instanceof collection_query_wrapper_1.CollectionOrQueryWrapper ? collectionPathOrQuery["query"] : collectionPathOrQuery;
        return new firestore_1.AngularFirestoreCollection(ref, query || ref, this.realAngularFirestore).valueChanges().pipe(operators_1.map(function (data) {
            if (options && options.serializer) {
                return _this.unserialize(data, new json_1.ArraySerializer(options.serializer), options.serializationOptions);
            }
            return data;
        }));
    };
    UniversalFirestoreAngularImpl.prototype.docDataObservable = function (doc, options) {
        var _this = this;
        if (typeof doc == "string") {
            return this.docDataObservable(this.doc(doc), options);
        }
        return this.realAngularFirestore.doc(doc.path).valueChanges().pipe(operators_1.map(function (data) {
            if (options && options.serializer) {
                return _this.unserialize(data, options.serializer, options.serializationOptions);
            }
            return data;
        }));
    };
    Object.defineProperty(UniversalFirestoreAngularImpl.prototype, "Timestamp", {
        get: function () {
            return app_1.default.firestore.Timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreAngularImpl.prototype, "GeoPoint", {
        get: function () {
            return app_1.default.firestore.GeoPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreAngularImpl.prototype, "FieldValue", {
        get: function () {
            return app_1.default.firestore.FieldValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreAngularImpl.prototype, "FieldPath", {
        get: function () {
            return app_1.default.firestore.FieldPath;
        },
        enumerable: true,
        configurable: true
    });
    return UniversalFirestoreAngularImpl;
}(__1.UniversalFirestore));
exports.UniversalFirestoreAngularImpl = UniversalFirestoreAngularImpl;
//# sourceMappingURL=firestore.js.map