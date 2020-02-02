import {firestoreAdmin, firestoreClient, isFirestoreAdmin, isFirestoreClient} from "./mode";
import {DocumentData} from "./shared-types";
import {firestoreAdminTypes, firestoreClientTypes} from "./types";

export type Firestore = firestoreClientTypes.Firestore | firestoreAdminTypes.Firestore;

export namespace Firestore {

    export function isClient(firestore: Firestore): firestore is firestoreClientTypes.Firestore {
        return isFirestoreClient() && firestore instanceof firestoreClient().Firestore;
    }

    export function isAdmin(firestore: Firestore): firestore is firestoreAdminTypes.Firestore {
        return isFirestoreAdmin() && firestore instanceof firestoreAdmin().DocumentReference;
    }

}


export type DocumentReference<T = DocumentData> = firestoreClientTypes.DocumentReference<T> | firestoreAdminTypes.DocumentReference<T>;

export namespace DocumentReference {

    export function isClient<T>(documentRef: DocumentReference<T>): documentRef is firestoreClientTypes.DocumentReference<T> {
        return isFirestoreClient() && documentRef instanceof firestoreClient().DocumentReference;
    }

    export function isAdmin<T>(documentRef: DocumentReference<T>): documentRef is firestoreAdminTypes.DocumentReference<T> {
        return isFirestoreAdmin() && documentRef instanceof firestoreAdmin().DocumentReference;
    }

}


export type CollectionReference<T = DocumentData> = firestoreClientTypes.CollectionReference<T> | firestoreAdminTypes.CollectionReference<T>;

export namespace CollectionReference {

    export function isClient<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreClientTypes.CollectionReference<T> {
        return isFirestoreClient() && collectionRef instanceof firestoreClient().CollectionReference;
    }

    export function isAdmin<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreAdminTypes.CollectionReference<T> {
        return isFirestoreAdmin() && collectionRef instanceof firestoreAdmin().CollectionReference;
    }

}


export type Query<T = DocumentData> = firestoreClientTypes.Query<T> | firestoreAdminTypes.Query<T>;

export namespace Query {

    export function isClient<T>(query: Query<T>): query is firestoreClientTypes.Query<T> {
        return isFirestoreClient() && query instanceof firestoreClient().Query;
    }

    export function isAdmin<T>(query: Query<T>): query is firestoreAdminTypes.Query<T> {
        return isFirestoreAdmin() && query instanceof firestoreAdmin().Query;
    }

}


export type Transaction = firestoreClientTypes.Transaction | firestoreAdminTypes.Transaction;

export namespace Transaction {

    export function isClient(transaction: Transaction): transaction is firestoreClientTypes.Transaction {
        return isFirestoreClient() && transaction instanceof firestoreClient().Transaction;
    }

    export function isAdmin(transaction: Transaction): transaction is firestoreAdminTypes.Transaction {
        return isFirestoreAdmin() && transaction instanceof firestoreAdmin().Transaction;
    }
}


export type DocumentSnapshot<T = DocumentData> = firestoreClientTypes.DocumentSnapshot<T> | firestoreAdminTypes.DocumentSnapshot<T>;

export namespace DocumentSnapshot {

    export function isClient<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreClientTypes.DocumentSnapshot<T> {
        return isFirestoreClient() && snapshot instanceof firestoreClient().Transaction;
    }

    export function isAdmin<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreAdminTypes.DocumentSnapshot<T> {
        return snapshot instanceof firestoreAdmin().Transaction;
    }
}


export type FieldValue = firestoreClientTypes.FieldValue | firestoreAdminTypes.FieldValue;

export namespace FieldValue {

    export function isClient(value: FieldValue): value is firestoreClientTypes.FieldValue {
        return isFirestoreClient() && value instanceof firestoreClient().FieldValue;
    }

    export function isAdmin(value: FieldValue): value is firestoreAdminTypes.FieldValue {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().FieldValue;
    }
}


export type FieldPath = firestoreClientTypes.FieldPath | firestoreAdminTypes.FieldPath;

export namespace FieldPath {

    export function isClient(value: FieldPath): value is firestoreClientTypes.FieldPath {
        return isFirestoreClient() && value instanceof firestoreClient().FieldPath;
    }

    export function isAdmin(value: FieldPath): value is firestoreAdminTypes.FieldPath {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().FieldPath;
    }
}


export type Timestamp = firestoreClientTypes.Timestamp | firestoreAdminTypes.Timestamp;

export namespace Timestamp {

    export function isClient(value: Timestamp): value is firestoreClientTypes.Timestamp {
        return isFirestoreClient() && value instanceof firestoreClient().Timestamp;
    }

    export function isAdmin(value: Timestamp): value is firestoreAdminTypes.Timestamp {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().Timestamp;
    }
}


export type GeoPoint = firestoreClientTypes.GeoPoint | firestoreAdminTypes.GeoPoint;

export namespace GeoPoint {

    export function isClient(value: GeoPoint): value is firestoreClientTypes.GeoPoint {
        return isFirestoreClient() && value instanceof firestoreClient().GeoPoint;
    }

    export function isAdmin(value: GeoPoint): value is firestoreAdminTypes.GeoPoint {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().GeoPoint;
    }
}


export type WriteBatch = firestoreClientTypes.WriteBatch | firestoreAdminTypes.WriteBatch;

export namespace WriteBatch {

    export function isClient(value: WriteBatch): value is firestoreClientTypes.WriteBatch {
        return isFirestoreClient() && value instanceof firestoreClient().WriteBatch;
    }

    export function isAdmin(value: WriteBatch): value is firestoreAdminTypes.WriteBatch {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().WriteBatch;
    }
}
