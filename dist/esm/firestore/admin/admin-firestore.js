import { firestore } from "firebase-admin";
import { UniversalFirestore } from "../";
import { WriteBatchWrapper } from "../write-batch-wrapper";
export class UniversalFirestoreAdminImpl extends UniversalFirestore {
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
//# sourceMappingURL=admin-firestore.js.map