import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
import { DocumentData } from "./shared-types";
export declare type Firestore = FirebaseClientModule.firestore.Firestore | FirebaseAdminModule.firestore.Firestore;
export declare namespace Firestore {
    function isClient(firestore: Firestore): firestore is FirebaseClientModule.firestore.Firestore;
    function isAdmin(firestore: Firestore): firestore is FirebaseAdminModule.firestore.Firestore;
}
export declare type DocumentReference<T = DocumentData> = FirebaseClientModule.firestore.DocumentReference<T> | FirebaseAdminModule.firestore.DocumentReference<T>;
export declare namespace DocumentReference {
    function isClient<T>(documentRef: DocumentReference<T>): documentRef is FirebaseClientModule.firestore.DocumentReference<T>;
    function isAdmin<T>(documentRef: DocumentReference<T>): documentRef is FirebaseAdminModule.firestore.DocumentReference<T>;
}
export declare type CollectionReference<T = DocumentData> = FirebaseClientModule.firestore.CollectionReference<T> | FirebaseAdminModule.firestore.CollectionReference<T>;
export declare namespace CollectionReference {
    function isClient<T>(collectionRef: CollectionReference<T>): collectionRef is FirebaseClientModule.firestore.CollectionReference<T>;
    function isAdmin<T>(collectionRef: CollectionReference<T>): collectionRef is FirebaseAdminModule.firestore.CollectionReference<T>;
}
export declare type Query<T = DocumentData> = FirebaseClientModule.firestore.Query<T> | FirebaseAdminModule.firestore.Query<T>;
export declare namespace Query {
    function isClient<T>(query: Query<T>): query is FirebaseClientModule.firestore.Query<T>;
    function isAdmin<T>(query: Query<T>): query is FirebaseAdminModule.firestore.Query<T>;
}
export declare type Transaction = FirebaseClientModule.firestore.Transaction | FirebaseAdminModule.firestore.Transaction;
export declare namespace Transaction {
    function isClient(transaction: Transaction): transaction is FirebaseClientModule.firestore.Transaction;
    function isAdmin(transaction: Transaction): transaction is FirebaseAdminModule.firestore.Transaction;
}
export declare type DocumentSnapshot<T = DocumentData> = FirebaseClientModule.firestore.DocumentSnapshot<T> | FirebaseAdminModule.firestore.DocumentSnapshot<T>;
export declare namespace DocumentSnapshot {
    function is(value: any): value is DocumentSnapshot;
    function isClient<T>(snapshot: DocumentSnapshot<T>): snapshot is FirebaseClientModule.firestore.DocumentSnapshot<T>;
    function isAdmin<T>(snapshot: DocumentSnapshot<T>): snapshot is FirebaseAdminModule.firestore.DocumentSnapshot<T>;
}
export declare type FieldValue = FirebaseClientModule.firestore.FieldValue | FirebaseAdminModule.firestore.FieldValue;
export declare namespace FieldValue {
    function isClient(value: FieldValue): value is FirebaseClientModule.firestore.FieldValue;
    function isAdmin(value: FieldValue): value is FirebaseAdminModule.firestore.FieldValue;
}
export declare type FieldPath = FirebaseClientModule.firestore.FieldPath | FirebaseAdminModule.firestore.FieldPath;
export declare namespace FieldPath {
    function isClient(value: FieldPath): value is FirebaseClientModule.firestore.FieldPath;
    function isAdmin(value: FieldPath): value is FirebaseAdminModule.firestore.FieldPath;
}
export declare type Timestamp = FirebaseClientModule.firestore.Timestamp | FirebaseAdminModule.firestore.Timestamp;
export declare namespace Timestamp {
    function isClient(value: Timestamp): value is FirebaseClientModule.firestore.Timestamp;
    function isAdmin(value: Timestamp): value is FirebaseAdminModule.firestore.Timestamp;
}
export declare type GeoPoint = FirebaseClientModule.firestore.GeoPoint | FirebaseAdminModule.firestore.GeoPoint;
export declare namespace GeoPoint {
    function isClient(value: GeoPoint): value is FirebaseClientModule.firestore.GeoPoint;
    function isAdmin(value: GeoPoint): value is FirebaseAdminModule.firestore.GeoPoint;
}
export declare type WriteBatch = FirebaseClientModule.firestore.WriteBatch | FirebaseAdminModule.firestore.WriteBatch;
export declare namespace WriteBatch {
    function isClient(value: WriteBatch): value is FirebaseClientModule.firestore.WriteBatch;
    function isAdmin(value: WriteBatch): value is FirebaseAdminModule.firestore.WriteBatch;
}
export declare type QueryDocumentSnapshot<T = DocumentData> = FirebaseClientModule.firestore.QueryDocumentSnapshot<T> | FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>;
export declare namespace QueryDocumentSnapshot {
    function is(value: any): value is QueryDocumentSnapshot;
    function isClient<T>(value: QueryDocumentSnapshot<T>): value is FirebaseClientModule.firestore.QueryDocumentSnapshot<T>;
    function isAdmin<T>(value: QueryDocumentSnapshot): value is FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>;
}
