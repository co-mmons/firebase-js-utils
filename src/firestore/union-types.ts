import {firestoreClient, firestoreAdmin} from "./types";
import {DocumentData} from "./shared-types";

export type Firestore = firestoreClient.FirebaseFirestore | firestoreAdmin.Firestore;

export namespace Firestore {

    export function isClient(firestore: Firestore): firestore is firestoreClient.FirebaseFirestore {
        return firestore instanceof firestoreClient.DocumentReference;
    }

    export function isAdmin(firestore: Firestore): firestore is firestoreAdmin.Firestore {
        return firestore instanceof firestoreAdmin.DocumentReference;
    }

}


export type DocumentReference<T = DocumentData> = firestoreClient.DocumentReference<T> | firestoreAdmin.DocumentReference<T>;

export namespace DocumentReference {

    export function isClient<T>(documentRef: DocumentReference<T>): documentRef is firestoreClient.DocumentReference<T> {
        return documentRef instanceof firestoreClient.DocumentReference;
    }

    export function isAdmin<T>(documentRef: DocumentReference<T>): documentRef is firestoreAdmin.DocumentReference<T> {
        return documentRef instanceof firestoreAdmin.DocumentReference;
    }

}


export type CollectionReference<T = DocumentData> = firestoreClient.CollectionReference<T> | firestoreAdmin.CollectionReference<T>;

export namespace CollectionReference {

    export function isClient<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreClient.CollectionReference<T> {
        return collectionRef instanceof firestoreClient.CollectionReference;
    }

    export function isAdmin<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreAdmin.CollectionReference<T> {
        return collectionRef instanceof firestoreAdmin.CollectionReference;
    }

}


export type Query<T = DocumentData> = firestoreClient.Query<T> | firestoreAdmin.Query<T>;

export namespace Query {

    export function isClient<T>(query: Query<T>): query is firestoreClient.Query<T> {
        return query instanceof firestoreClient.Query;
    }

    export function isAdmin<T>(query: Query<T>): query is firestoreAdmin.Query<T> {
        return query instanceof firestoreAdmin.Query;
    }

}


export type Transaction = firestoreClient.Transaction | firestoreAdmin.Transaction;

export namespace Transaction {

    export function isClient(transaction: Transaction): transaction is firestoreClient.Transaction {
        return transaction instanceof firestoreClient.Transaction;
    }

    export function isAdmin(transaction: Transaction): transaction is firestoreAdmin.Transaction {
        return transaction instanceof firestoreAdmin.Transaction;
    }
}


export type DocumentSnapshot<T = DocumentData> = firestoreClient.DocumentSnapshot<T> | firestoreAdmin.DocumentSnapshot<T>;

export namespace DocumentSnapshot {

    export function isClient<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreClient.DocumentSnapshot<T> {
        return snapshot instanceof firestoreClient.Transaction;
    }

    export function isAdmin<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreAdmin.DocumentSnapshot<T> {
        return snapshot instanceof firestoreAdmin.Transaction;
    }
}


export type FieldValue = firestoreClient.FieldValue | firestoreAdmin.FieldValue;

export namespace FieldValue {

    export function isClient(value: FieldValue): value is firestoreClient.FieldValue {
        return value instanceof firestoreClient.FieldValue;
    }

    export function isAdmin(value: FieldValue): value is firestoreAdmin.FieldValue {
        return value instanceof firestoreAdmin.FieldValue;
    }
}


export type FieldPath = firestoreClient.FieldPath | firestoreAdmin.FieldPath;

export namespace FieldPath {

    export function isClient(value: FieldPath): value is firestoreClient.FieldPath {
        return value instanceof firestoreClient.FieldPath;
    }

    export function isAdmin(value: FieldPath): value is firestoreAdmin.FieldPath {
        return value instanceof firestoreAdmin.FieldPath;
    }
}


export type Timestamp = firestoreClient.Timestamp | firestoreAdmin.Timestamp;

export namespace Timestamp {

    export function isClient(value: Timestamp): value is firestoreClient.Timestamp {
        return value instanceof firestoreClient.Timestamp;
    }

    export function isAdmin(value: Timestamp): value is firestoreAdmin.Timestamp {
        return value instanceof firestoreAdmin.Timestamp;
    }
}


export type GeoPoint = firestoreClient.GeoPoint | firestoreAdmin.GeoPoint;

export namespace GeoPoint {

    export function isClient(value: GeoPoint): value is firestoreClient.GeoPoint {
        return value instanceof firestoreClient.GeoPoint;
    }

    export function isAdmin(value: GeoPoint): value is firestoreAdmin.GeoPoint {
        return value instanceof firestoreAdmin.GeoPoint;
    }
}
