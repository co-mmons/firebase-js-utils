import { DocumentData } from "./shared-types";
import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "./types";
export declare type Firestore = firestoreClientModuleTypes.Firestore | firestoreAdminModuleTypes.Firestore;
export declare namespace Firestore {
    function isClient(firestore: Firestore): firestore is firestoreClientModuleTypes.Firestore;
    function isAdmin(firestore: Firestore): firestore is firestoreAdminModuleTypes.Firestore;
}
export declare type DocumentReference<T = DocumentData> = firestoreClientModuleTypes.DocumentReference<T> | firestoreAdminModuleTypes.DocumentReference<T>;
export declare namespace DocumentReference {
    function isClient<T>(documentRef: DocumentReference<T>): documentRef is firestoreClientModuleTypes.DocumentReference<T>;
    function isAdmin<T>(documentRef: DocumentReference<T>): documentRef is firestoreAdminModuleTypes.DocumentReference<T>;
}
export declare type CollectionReference<T = DocumentData> = firestoreClientModuleTypes.CollectionReference<T> | firestoreAdminModuleTypes.CollectionReference<T>;
export declare namespace CollectionReference {
    function isClient<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreClientModuleTypes.CollectionReference<T>;
    function isAdmin<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreAdminModuleTypes.CollectionReference<T>;
}
export declare type Query<T = DocumentData> = firestoreClientModuleTypes.Query<T> | firestoreAdminModuleTypes.Query<T>;
export declare namespace Query {
    function isClient<T>(query: Query<T>): query is firestoreClientModuleTypes.Query<T>;
    function isAdmin<T>(query: Query<T>): query is firestoreAdminModuleTypes.Query<T>;
}
export declare type Transaction = firestoreClientModuleTypes.Transaction | firestoreAdminModuleTypes.Transaction;
export declare namespace Transaction {
    function isClient(transaction: Transaction): transaction is firestoreClientModuleTypes.Transaction;
    function isAdmin(transaction: Transaction): transaction is firestoreAdminModuleTypes.Transaction;
}
export declare type DocumentSnapshot<T = DocumentData> = firestoreClientModuleTypes.DocumentSnapshot<T> | firestoreAdminModuleTypes.DocumentSnapshot<T>;
export declare namespace DocumentSnapshot {
    function isClient<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreClientModuleTypes.DocumentSnapshot<T>;
    function isAdmin<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreAdminModuleTypes.DocumentSnapshot<T>;
}
export declare type FieldValue = firestoreClientModuleTypes.FieldValue | firestoreAdminModuleTypes.FieldValue;
export declare namespace FieldValue {
    function isClient(value: FieldValue): value is firestoreClientModuleTypes.FieldValue;
    function isAdmin(value: FieldValue): value is firestoreAdminModuleTypes.FieldValue;
}
export declare type FieldPath = firestoreClientModuleTypes.FieldPath | firestoreAdminModuleTypes.FieldPath;
export declare namespace FieldPath {
    function isClient(value: FieldPath): value is firestoreClientModuleTypes.FieldPath;
    function isAdmin(value: FieldPath): value is firestoreAdminModuleTypes.FieldPath;
}
export declare type Timestamp = firestoreClientModuleTypes.Timestamp | firestoreAdminModuleTypes.Timestamp;
export declare namespace Timestamp {
    function isClient(value: Timestamp): value is firestoreClientModuleTypes.Timestamp;
    function isAdmin(value: Timestamp): value is firestoreAdminModuleTypes.Timestamp;
}
export declare type GeoPoint = firestoreClientModuleTypes.GeoPoint | firestoreAdminModuleTypes.GeoPoint;
export declare namespace GeoPoint {
    function isClient(value: GeoPoint): value is firestoreClientModuleTypes.GeoPoint;
    function isAdmin(value: GeoPoint): value is firestoreAdminModuleTypes.GeoPoint;
}
export declare type WriteBatch = firestoreClientModuleTypes.WriteBatch | firestoreAdminModuleTypes.WriteBatch;
export declare namespace WriteBatch {
    function isClient(value: WriteBatch): value is firestoreClientModuleTypes.WriteBatch;
    function isAdmin(value: WriteBatch): value is firestoreAdminModuleTypes.WriteBatch;
}
export declare type QueryDocumentSnapshot<T = DocumentData> = firestoreClientModuleTypes.QueryDocumentSnapshot<T> | firestoreAdminModuleTypes.QueryDocumentSnapshot<T>;
export declare namespace QueryDocumentSnapshot {
    function is(value: any): value is QueryDocumentSnapshot;
    function isClient<T>(value: QueryDocumentSnapshot<T>): value is firestoreClientModuleTypes.QueryDocumentSnapshot<T>;
    function isAdmin<T>(value: QueryDocumentSnapshot): value is firestoreAdminModuleTypes.QueryDocumentSnapshot<T>;
}
