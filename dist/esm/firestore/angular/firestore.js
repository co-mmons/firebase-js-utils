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
import firebase from "firebase/app";
import { first } from "rxjs/operators";
import { UniversalFirestore } from "../";
import { CollectionOrQueryWrapper } from "../collection-query-wrapper";
import { DocumentWrapper } from "../document-wrapper";
import "./rxjs";
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
        return this.fakeFirestore.realAngularFirestore.collection(this.collection.ref, function () { return _this.query; }).get(options).pipe(first()).toPromise();
    };
    CollectionOrQueryAngularWrapper.prototype.onSnapshot = function (options, onNext, onError, onCompletion) {
        var _this = this;
        return this.fakeFirestore.realAngularFirestore.collection(this.collection.ref, function () { return _this.query; }).ref.onSnapshot(options, onNext, onError, onCompletion);
    };
    return CollectionOrQueryAngularWrapper;
}(CollectionOrQueryWrapper));
export { CollectionOrQueryAngularWrapper };
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
        return this.doc.get(options).pipe(first()).toPromise();
    };
    return DocumentAngularWrapper;
}(DocumentWrapper));
export { DocumentAngularWrapper };
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
    /**
     * Creates a write batch, used for performing multiple writes as a single
     * atomic operation.
     */
    UniversalFirestoreAngularImpl.prototype.batch = function () {
        return this.realAngularFirestore.firestore.batch();
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