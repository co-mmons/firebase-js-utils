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
var app_1 = require("firebase/app");
var operators_1 = require("rxjs/operators");
var __1 = require("../");
var collection_query_wrapper_1 = require("../collection-query-wrapper");
var document_wrapper_1 = require("../document-wrapper");
var CollectionOrQueryAngularWrapper = /** @class */ (function (_super) {
    __extends(CollectionOrQueryAngularWrapper, _super);
    function CollectionOrQueryAngularWrapper(firestore, collection, query) {
        var _this = _super.call(this, firestore, collection.ref, query) || this;
        _this.collection = collection;
        return _this;
    }
    CollectionOrQueryAngularWrapper.prototype.doc = function (documentPath) {
        return new DocumentAngularWrapper(this.fakeFirestore, this.collection.doc(documentPath));
    };
    CollectionOrQueryAngularWrapper.prototype.get = function (options) {
        var _this = this;
        return this.fakeFirestore.realAngularFirestore.collection(this.collection.ref, function () { return _this.query; }).get(options).pipe(operators_1.first()).toPromise();
    };
    CollectionOrQueryAngularWrapper.prototype.onSnapshot = function (options, onNext, onError, onCompletion) {
        var _this = this;
        return this.fakeFirestore.realAngularFirestore.collection(this.collection.ref, function () { return _this.query; }).ref.onSnapshot(options, onNext, onError, onCompletion);
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
var AngularFirestore = /** @class */ (function (_super) {
    __extends(AngularFirestore, _super);
    function AngularFirestore(realAngularFirestore) {
        var _this = _super.call(this) || this;
        _this.realAngularFirestore = realAngularFirestore;
        return _this;
    }
    AngularFirestore.prototype.collection = function (collectionPath) {
        return new CollectionOrQueryAngularWrapper(this, this.realAngularFirestore.collection(collectionPath));
    };
    AngularFirestore.prototype.doc = function (documentPath) {
        return new DocumentAngularWrapper(this, this.realAngularFirestore.doc(documentPath));
    };
    AngularFirestore.prototype.runTransaction = function (updateFunction) {
        return this.realAngularFirestore.firestore.runTransaction(updateFunction);
    };
    /**
     * Creates a write batch, used for performing multiple writes as a single
     * atomic operation.
     */
    AngularFirestore.prototype.batch = function () {
        return this.realAngularFirestore.firestore.batch();
    };
    Object.defineProperty(AngularFirestore.prototype, "Timestamp", {
        get: function () {
            return app_1.default.firestore.Timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularFirestore.prototype, "GeoPoint", {
        get: function () {
            return app_1.default.firestore.GeoPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularFirestore.prototype, "FieldValue", {
        get: function () {
            return app_1.default.firestore.FieldValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularFirestore.prototype, "FieldPath", {
        get: function () {
            return app_1.default.firestore.FieldPath;
        },
        enumerable: true,
        configurable: true
    });
    return AngularFirestore;
}(__1.AbstractFirestore));
exports.AngularFirestore = AngularFirestore;
//# sourceMappingURL=firestore.js.map