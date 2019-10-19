import { firestore } from "firebase/app";
import { UniversalFirestore } from "../firestore";
import { TransactionWrapper } from "../transaction-wrapper";
import { WriteBatchWrapper } from "../write-batch-wrapper";
export class UniversalFirestoreJsImpl extends UniversalFirestore {
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
        return this.firestore.runTransaction((transaction) => updateFunction(new TransactionWrapper(transaction)));
    }
    batch() {
        return new WriteBatchWrapper(this.firestore.batch());
    }
    get Timestamp() {
        return firestore.Timestamp;
    }
    get GeoPoint() {
        return firestore.GeoPoint;
    }
    get FieldValue() {
        return firestore.FieldValue;
    }
    get FieldPath() {
        return firestore.FieldPath;
    }
}
//# sourceMappingURL=js-firestore.js.map