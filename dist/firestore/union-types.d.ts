import { firestoreClient, firestoreAdmin } from "./types";
import { DocumentData } from "./shared-types";
export declare type Firestore = firestoreClient.FirebaseFirestore | firestoreAdmin.Firestore;
export declare namespace Firestore {
    function isClient(firestore: Firestore): firestore is firestoreClient.FirebaseFirestore;
    function isAdmin(firestore: Firestore): firestore is firestoreAdmin.Firestore;
}
export declare type DocumentReference<T = DocumentData> = firestoreClient.DocumentReference<T> | firestoreAdmin.DocumentReference<T>;
export declare namespace DocumentReference {
    function isClient<T>(documentRef: DocumentReference<T>): documentRef is firestoreClient.DocumentReference<T>;
    function isAdmin<T>(documentRef: DocumentReference<T>): documentRef is firestoreAdmin.DocumentReference<T>;
}
export declare type CollectionReference<T = DocumentData> = firestoreClient.CollectionReference<T> | firestoreAdmin.CollectionReference<T>;
export declare namespace CollectionReference {
    function isClient<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreClient.CollectionReference<T>;
    function isAdmin<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreAdmin.CollectionReference<T>;
}
export declare type Query<T = DocumentData> = firestoreClient.Query<T> | firestoreAdmin.Query<T>;
export declare namespace Query {
    function isClient<T>(query: Query<T>): query is firestoreClient.Query<T>;
    function isAdmin<T>(query: Query<T>): query is firestoreAdmin.Query<T>;
}
export declare type Transaction = firestoreClient.Transaction | firestoreAdmin.Transaction;
export declare namespace Transaction {
    function isClient(transaction: Transaction): transaction is firestoreClient.Transaction;
    function isAdmin(transaction: Transaction): transaction is firestoreAdmin.Transaction;
}
export declare type DocumentSnapshot<T = DocumentData> = firestoreClient.DocumentSnapshot<T> | firestoreAdmin.DocumentSnapshot<T>;
export declare namespace DocumentSnapshot {
    function isClient<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreClient.DocumentSnapshot<T>;
    function isAdmin<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreAdmin.DocumentSnapshot<T>;
}
export declare type FieldValue = firestoreClient.FieldValue | firestoreAdmin.FieldValue;
export declare namespace FieldValue {
    function isClient(value: FieldValue): value is firestoreClient.FieldValue;
    function isAdmin(value: FieldValue): value is firestoreAdmin.FieldValue;
}
export declare type FieldPath = firestoreClient.FieldPath | firestoreAdmin.FieldPath;
export declare namespace FieldPath {
    function isClient(value: FieldPath): value is firestoreClient.FieldPath;
    function isAdmin(value: FieldPath): value is firestoreAdmin.FieldPath;
}
