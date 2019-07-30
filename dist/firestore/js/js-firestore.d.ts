import { firestore } from "firebase/app";
import { UniversalFirestore } from "../firestore";
import { CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, GeoPointStatic, TimestampStatic, Transaction, WriteBatch } from "../types";
export declare class UniversalFirestoreJsImpl extends UniversalFirestore<firestore.Firestore> {
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
