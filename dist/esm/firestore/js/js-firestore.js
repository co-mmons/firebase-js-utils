var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { firestore } from "firebase/app";
import { UniversalFirestore } from "../firestore";
import { TransactionWrapper } from "../transaction-wrapper";
import { WriteBatchWrapper } from "../write-batch-wrapper";
var UniversalFirestoreJsImpl = /** @class */ (function (_super) {
    __extends(UniversalFirestoreJsImpl, _super);
    function UniversalFirestoreJsImpl(firestore) {
        var _this = _super.call(this) || this;
        _this.firestore = firestore;
        return _this;
    }
    UniversalFirestoreJsImpl.prototype.collection = function (collectionPath) {
        return this.firestore.collection(collectionPath);
    };
    UniversalFirestoreJsImpl.prototype.doc = function (documentPath) {
        return this.firestore.doc(documentPath);
    };
    UniversalFirestoreJsImpl.prototype.runTransaction = function (updateFunction) {
        return this.firestore.runTransaction(function (transaction) { return updateFunction(new TransactionWrapper(transaction)); });
    };
    UniversalFirestoreJsImpl.prototype.batch = function () {
        return new WriteBatchWrapper(this.firestore.batch());
    };
    Object.defineProperty(UniversalFirestoreJsImpl.prototype, "Timestamp", {
        get: function () {
            return firestore.Timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreJsImpl.prototype, "GeoPoint", {
        get: function () {
            return firestore.GeoPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreJsImpl.prototype, "FieldValue", {
        get: function () {
            return firestore.FieldValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreJsImpl.prototype, "FieldPath", {
        get: function () {
            return firestore.FieldPath;
        },
        enumerable: true,
        configurable: true
    });
    return UniversalFirestoreJsImpl;
}(UniversalFirestore));
export { UniversalFirestoreJsImpl };
//# sourceMappingURL=js-firestore.js.map