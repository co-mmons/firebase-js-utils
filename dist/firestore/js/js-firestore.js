"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const firestore_1 = require("../firestore");
const transaction_wrapper_1 = require("../transaction-wrapper");
const write_batch_wrapper_1 = require("../write-batch-wrapper");
class UniversalFirestoreJsImpl extends firestore_1.UniversalFirestore {
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
        return this.firestore.runTransaction((transaction) => updateFunction(new transaction_wrapper_1.TransactionWrapper(transaction)));
    }
    batch() {
        return new write_batch_wrapper_1.WriteBatchWrapper(this.firestore.batch());
    }
    get Timestamp() {
        return app_1.firestore.Timestamp;
    }
    get GeoPoint() {
        return app_1.firestore.GeoPoint;
    }
    get FieldValue() {
        return app_1.firestore.FieldValue;
    }
    get FieldPath() {
        return app_1.firestore.FieldPath;
    }
}
exports.UniversalFirestoreJsImpl = UniversalFirestoreJsImpl;
//# sourceMappingURL=js-firestore.js.map