import { firestoreClient, firestoreAdmin } from "./types";
import { DocumentData } from "./shared-types";
export declare type Firestore = firestoreClient.FirebaseFirestore | firestoreAdmin.Firestore;
export declare namespace Firestore {
    function isClient(firestore: Firestore): firestore is firestoreClient.FirebaseFirestore;
    function isAdmin(firestore: Firestore): firestore is firestoreAdmin.Firestore;
}
export declare type DocumentReference<T = DocumentData> = firestoreClient.DocumentReference<T> | firestoreAdmin.DocumentReference<T>;
export declare namespace DocumentReference {
    function isClient(documentRef: DocumentReference): documentRef is firestoreClient.DocumentReference;
    function isAdmin(documentRef: DocumentReference): documentRef is firestoreAdmin.DocumentReference;
}
export declare type CollectionReference<T = DocumentData> = firestoreClient.CollectionReference<T> | firestoreAdmin.CollectionReference<T>;
export declare namespace CollectionReference {
    function isClient(collectionRef: CollectionReference): collectionRef is firestoreClient.CollectionReference;
    function isAdmin(collectionRef: CollectionReference): collectionRef is firestoreAdmin.CollectionReference;
}
export declare type Query<T = DocumentData> = firestoreClient.Query<T> | firestoreAdmin.Query<T>;
export declare namespace Query {
    function isClient(query: Query): query is firestoreClient.Query;
    function isAdmin(query: Query): query is firestoreAdmin.Query;
}
export declare type Transaction = firestoreClient.Transaction | firestoreAdmin.Transaction;
export declare namespace Transaction {
    function isClient(transaction: Transaction): transaction is firestoreClient.Transaction;
    function isAdmin(transaction: Transaction): transaction is firestoreAdmin.Transaction;
}
export declare type DocumentSnapshot = firestoreClient.DocumentSnapshot | firestoreAdmin.DocumentSnapshot;
export declare namespace DocumentSnapshot {
    function isClient(snapshot: DocumentSnapshot): snapshot is firestoreClient.DocumentSnapshot;
    function isAdmin(snapshot: DocumentSnapshot): snapshot is firestoreAdmin.DocumentSnapshot;
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
