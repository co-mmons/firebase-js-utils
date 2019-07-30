import { firestore } from "firebase-admin";
import { UniversalFirestore } from "../";
import { CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, GeoPointStatic, TimestampStatic, Transaction, WriteBatch } from "../types";
export declare class UniversalFirestoreAdminImpl extends UniversalFirestore<firestore.Firestore> {
    readonly firestore: firestore.Firestore;
    constructor(firestore: firestore.Firestore);
    collection(collectionPath: string): CollectionReference;
    doc(documentPath: string): DocumentReference;
    runTransaction<T>(updateFunction: (transaction: Transaction) => Promise<T>): Promise<T>;
    batch(): WriteBatch;
    readonly Timestamp: TimestampStatic;
    readonly GeoPoint: GeoPointStatic;
    readonly FieldValue: FieldValueStatic;
    readonly FieldPath: FieldPathStatic;
}
