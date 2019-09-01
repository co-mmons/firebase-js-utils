import * as tslib_1 from "tslib";
import { firestore } from "firebase-admin";
import { UniversalFirestore } from "../";
import { WriteBatchWrapper } from "../write-batch-wrapper";
var UniversalFirestoreAdminImpl = /** @class */ (function (_super) {
    tslib_1.__extends(UniversalFirestoreAdminImpl, _super);
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