import {firestore} from "firebase-admin";
import {UniversalFirestore} from "../";
import {CollectionOrQueryWrapper} from "../collection-query-wrapper";
import {CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, GeoPointStatic, Query, TimestampStatic, Transaction, WriteBatch} from "../types";
import {WriteBatchWrapper} from "../write-batch-wrapper";

export class UniversalFirestoreAdminImpl extends UniversalFirestore<firestore.Firestore> {

    constructor(public readonly firestore: firestore.Firestore) {
        super();
    }

    collection(collectionPath: string): CollectionReference {
        return <any>this.firestore.collection(collectionPath);
    }

    doc(documentPath: string): DocumentReference {
        return <any>this.firestore.doc(documentPath);
    }

    runTransaction<T>(updateFunction: (transaction: Transaction) => Promise<T>): Promise<T> {
        return this.firestore.runTransaction(<any>updateFunction);
    }

    batch(): WriteBatch {
        return new WriteBatchWrapper(<any>this.firestore.batch());
    }

    get Timestamp(): TimestampStatic {
        return firestore.Timestamp;
    }

    get GeoPoint(): GeoPointStatic {
        return firestore.GeoPoint;
    }

    get FieldValue(): FieldValueStatic {
        return firestore.FieldValue;
    }

    get FieldPath(): FieldPathStatic {
        return firestore.FieldPath;
    }
}
