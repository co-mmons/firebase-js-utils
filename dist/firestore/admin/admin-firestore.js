"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = require("firebase-admin");
const __1 = require("../");
const write_batch_wrapper_1 = require("../write-batch-wrapper");
class UniversalFirestoreAdminImpl extends __1.UniversalFirestore {
    constructor(firestore) {
        super();
        this.firestore = firestore;
    }
    collection(collectionPath) {
        return this.firestore.collection(collectionPath);
    }
    doc(documentPath) {
        return this.firestore.doc(documentPath);
    }
    runTransaction(updateFunction) {
        return this.firestore.runTransaction(updateFunction);
    }
    batch() {
        return new write_batch_wrapper_1.WriteBatchWrapper(this.firestore.batch());
    }
    get Timestamp() {
        return firebase_admin_1.firestore.Timestamp;
    }
    get GeoPoint() {
        return firebase_admin_1.firestore.GeoPoint;
    }
    get FieldValue() {
        return firebase_admin_1.firestore.FieldValue;
    }
    get FieldPath() {
        return firebase_admin_1.firestore.FieldPath;
    }
}
exports.UniversalFirestoreAdminImpl = UniversalFirestoreAdminImpl;
//# sourceMappingURL=admin-firestore.js.map