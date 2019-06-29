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
import { firestore } from "firebase-admin";
import { UniversalFirestore } from "../";
import { WriteBatchWrapper } from "../write-batch-wrapper";
var UniversalFirestoreAdminImpl = /** @class */ (function (_super) {
    __extends(UniversalFirestoreAdminImpl, _super);
    function UniversalFirestoreAdminImpl(firestore) {
        var _this = _super.call(this) || this;
        _this.firestore = firestore;
        return _this;
    }
    UniversalFirestoreAdminImpl.prototype.collection = function (collectionPath) {
        return this.firestore.collection(collectionPath);
    };
    UniversalFirestoreAdminImpl.prototype.doc = function (documentPath) {
        return this.firestore.doc(documentPath);
    };
    UniversalFirestoreAdminImpl.prototype.runTransaction = function (updateFunction) {
        return this.firestore.runTransaction(updateFunction);
    };
    UniversalFirestoreAdminImpl.prototype.batch = function () {
        return new WriteBatchWrapper(this.firestore.batch());
    };
    Object.defineProperty(UniversalFirestoreAdminImpl.prototype, "Timestamp", {
        get: function () {
            return firestore.Timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreAdminImpl.prototype, "GeoPoint", {
        get: function () {
            return firestore.GeoPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreAdminImpl.prototype, "FieldValue", {
        get: function () {
            return firestore.FieldValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreAdminImpl.prototype, "FieldPath", {
        get: function () {
            return firestore.FieldPath;
        },
        enumerable: true,
        configurable: true
    });
    return UniversalFirestoreAdminImpl;
}(UniversalFirestore));
export { UniversalFirestoreAdminImpl };
//# sourceMappingURL=admin-firestore.js.map