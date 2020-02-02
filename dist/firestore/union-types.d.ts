import { DocumentData } from "./shared-types";
import { firestoreAdminTypes, firestoreClientTypes } from "./types";
export declare type Firestore = firestoreClientTypes.Firestore | firestoreAdminTypes.Firestore;
export declare namespace Firestore {
    function isClient(firestore: Firestore): firestore is firestoreClientTypes.Firestore;
    function isAdmin(firestore: Firestore): firestore is firestoreAdminTypes.Firestore;
}
export declare type DocumentReference<T = DocumentData> = firestoreClientTypes.DocumentReference<T> | firestoreAdminTypes.DocumentReference<T>;
export declare namespace DocumentReference {
    function isClient<T>(documentRef: DocumentReference<T>): documentRef is firestoreClientTypes.DocumentReference<T>;
    function isAdmin<T>(documentRef: DocumentReference<T>): documentRef is firestoreAdminTypes.DocumentReference<T>;
}
export declare type CollectionReference<T = DocumentData> = firestoreClientTypes.CollectionReference<T> | firestoreAdminTypes.CollectionReference<T>;
export declare namespace CollectionReference {
    function isClient<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreClientTypes.CollectionReference<T>;
    function isAdmin<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreAdminTypes.CollectionReference<T>;
}
export declare type Query<T = DocumentData> = firestoreClientTypes.Query<T> | firestoreAdminTypes.Query<T>;
export declare namespace Query {
    function isClient<T>(query: Query<T>): query is firestoreClientTypes.Query<T>;
    function isAdmin<T>(query: Query<T>): query is firestoreAdminTypes.Query<T>;
}
export declare type Transaction = firestoreClientTypes.Transaction | firestoreAdminTypes.Transaction;
export declare namespace Transaction {
    function isClient(transaction: Transaction): transaction is firestoreClientTypes.Transaction;
    function isAdmin(transaction: Transaction): transaction is firestoreAdminTypes.Transaction;
}
export declare type DocumentSnapshot<T = DocumentData> = firestoreClientTypes.DocumentSnapshot<T> | firestoreAdminTypes.DocumentSnapshot<T>;
export declare namespace DocumentSnapshot {
    function isClient<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreClientTypes.DocumentSnapshot<T>;
    function isAdmin<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreAdminTypes.DocumentSnapshot<T>;
}
export declare type FieldValue = firestoreClientTypes.FieldValue | firestoreAdminTypes.FieldValue;
export declare namespace FieldValue {
    function isClient(value: FieldValue): value is firestoreClientTypes.FieldValue;
    function isAdmin(value: FieldValue): value is firestoreAdminTypes.FieldValue;
}
export declare type FieldPath = firestoreClientTypes.FieldPath | firestoreAdminTypes.FieldPath;
export declare namespace FieldPath {
    function isClient(value: FieldPath): value is firestoreClientTypes.FieldPath;
    function isAdmin(value: FieldPath): value is firestoreAdminTypes.FieldPath;
}
export declare type Timestamp = firestoreClientTypes.Timestamp | firestoreAdminTypes.Timestamp;
export declare namespace Timestamp {
    function isClient(value: Timestamp): value is firestoreClientTypes.Timestamp;
    function isAdmin(value: Timestamp): value is firestoreAdminTypes.Timestamp;
}
export declare type GeoPoint = firestoreClientTypes.GeoPoint | firestoreAdminTypes.GeoPoint;
export declare namespace GeoPoint {
    function isClient(value: GeoPoint): value is firestoreClientTypes.GeoPoint;
    function isAdmin(value: GeoPoint): value is firestoreAdminTypes.GeoPoint;
}
export declare type WriteBatch = firestoreClientTypes.WriteBatch | firestoreAdminTypes.WriteBatch;
export declare namespace WriteBatch {
    function isClient(value: WriteBatch): value is firestoreClientTypes.WriteBatch;
    function isAdmin(value: WriteBatch): value is firestoreAdminTypes.WriteBatch;
}
