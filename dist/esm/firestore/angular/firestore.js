import * as tslib_1 from "tslib";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { ArraySerializer } from "@co.mmons/js-utils/json";
import firebase from "firebase/app";
import { Observable } from "rxjs";
import { first, map } from "rxjs/operators";
import { UniversalFirestore } from "../";
import { CollectionOrQueryWrapper } from "../collection-query-wrapper";
import { DocumentWrapper } from "../document-wrapper";
import { injectUniversalFirestoreRxjs } from "../rxjs";
import { TransactionWrapper } from "../transaction-wrapper";
import { WriteBatchWrapper } from "../write-batch-wrapper";
injectUniversalFirestoreRxjs();
var CollectionOrQueryAngularWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(CollectionOrQueryAngularWrapper, _super);
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
        return new AngularFirestoreCollection(this.collection.ref, (this.query || this.collection.ref), this.fakeFirestore.firestore).get(options).pipe(first()).toPromise();
    };
    CollectionOrQueryAngularWrapper.prototype.onSnapshot = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var options = args.length > 1 && typeof args[0] != "function" ? args[0] : undefined;
        var observable = new Observable(function (subscriber) {
            var unsubscribe = (_this.query || _this.ref).onSnapshot(options, subscriber);
            return { unsubscribe: unsubscribe };
        });
        var scheduled = this.fakeFirestore.firestore.scheduler.keepUnstableUntilFirst(this.fakeFirestore.firestore.scheduler.runOutsideAngular(observable));
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
}(CollectionOrQueryWrapper));
export { CollectionOrQueryAngularWrapper };
var DocumentAngularWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentAngularWrapper, _super);
    function DocumentAngularWrapper(firestore, doc) {
        var _this = _super.call(this, firestore, doc.ref) || this;
        _this.doc = doc;
        return _this;
    }
    DocumentAngularWrapper.prototype.collection = function (collectionPath) {
        return new CollectionOrQueryAngularWrapper(this.fakeFirestore, this.doc.collection(collectionPath));
    };
    DocumentAngularWrapper.prototype.get = function (options) {
        return this.doc.get(options).pipe(first()).toPromise();
    };
    return DocumentAngularWrapper;
}(DocumentWrapper));
export { DocumentAngularWrapper };
var UniversalFirestoreAngularImpl = /** @class */ (function (_super) {
    tslib_1.__extends(UniversalFirestoreAngularImpl, _super);
    function UniversalFirestoreAngularImpl(firestore) {
        var _this = _super.call(this) || this;
        _this.firestore = firestore;
        return _this;
    }
    UniversalFirestoreAngularImpl.prototype.collection = function (collectionPath) {
        return new CollectionOrQueryAngularWrapper(this, this.firestore.collection(collectionPath));
    };
    UniversalFirestoreAngularImpl.prototype.doc = function (documentPath) {
        return new DocumentAngularWrapper(this, this.firestore.doc(documentPath));
    };
    UniversalFirestoreAngularImpl.prototype.runTransaction = function (updateFunction) {
        return this.firestore.firestore.runTransaction(function (transaction) { return updateFunction(new TransactionWrapper(transaction)); });
    };
    UniversalFirestoreAngularImpl.prototype.batch = function () {
        return new WriteBatchWrapper(this.firestore.firestore.batch());
    };
    UniversalFirestoreAngularImpl.prototype.createId = function () {
        return this.firestore.createId();
    };
    UniversalFirestoreAngularImpl.prototype.docsDataObservable = function (collectionPathOrQuery, options) {
        var _this = this;
        if (typeof collectionPathOrQuery == "string") {
            return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
        }
        if (!collectionPathOrQuery["path"]) {
            throw new Error("Not supported object: " + collectionPathOrQuery);
        }
        var ref = collectionPathOrQuery instanceof CollectionOrQueryWrapper ? collectionPathOrQuery.ref : collectionPathOrQuery;
        var query = collectionPathOrQuery instanceof CollectionOrQueryWrapper ? collectionPathOrQuery["query"] : collectionPathOrQuery;
        return new AngularFirestoreCollection(ref, query || ref, this.firestore).valueChanges().pipe(map(function (data) {
            if (options && options.serializer) {
                return _this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
            }
            return data;
        }));
    };
    UniversalFirestoreAngularImpl.prototype.docDataObservable = function (doc, options) {
        var _this = this;
        if (typeof doc == "string") {
            return this.docDataObservable(this.doc(doc), options);
        }
        return this.firestore.doc(doc.path).valueChanges().pipe(map(function (data) {
            if (options && options.serializer) {
                return _this.unserialize(data, options.serializer, options.serializationOptions);
            }
            return data;
        }));
    };
    Object.defineProperty(UniversalFirestoreAngularImpl.prototype, "Timestamp", {
        get: function () {
            return firebase.firestore.Timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreAngularImpl.prototype, "GeoPoint", {
        get: function () {
            return firebase.firestore.GeoPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreAngularImpl.prototype, "FieldValue", {
        get: function () {
            return firebase.firestore.FieldValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreAngularImpl.prototype, "FieldPath", {
        get: function () {
            return firebase.firestore.FieldPath;
        },
        enumerable: true,
        configurable: true
    });
    return UniversalFirestoreAngularImpl;
}(UniversalFirestore));
export { UniversalFirestoreAngularImpl };
//# sourceMappingURL=firestore.js.map