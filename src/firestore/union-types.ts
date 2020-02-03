import {firestoreAdminModule, firestoreClientModule, isFirestoreAdmin, isFirestoreClient} from "./mode";
import {DocumentData} from "./shared-types";
import {firestoreAdminModuleTypes, firestoreClientModuleTypes} from "./types";

export type Firestore = firestoreClientModuleTypes.Firestore | firestoreAdminModuleTypes.Firestore;

export namespace Firestore {

    export function isClient(firestore: Firestore): firestore is firestoreClientModuleTypes.Firestore {
        return isFirestoreClient() && firestore instanceof firestoreClientModule().Firestore;
    }

    export function isAdmin(firestore: Firestore): firestore is firestoreAdminModuleTypes.Firestore {
        return isFirestoreAdmin() && firestore instanceof firestoreAdminModule().DocumentReference;
    }

}


export type DocumentReference<T = DocumentData> = firestoreClientModuleTypes.DocumentReference<T> | firestoreAdminModuleTypes.DocumentReference<T>;

export namespace DocumentReference {

    export function isClient<T>(documentRef: DocumentReference<T>): documentRef is firestoreClientModuleTypes.DocumentReference<T> {
        return isFirestoreClient() && documentRef instanceof firestoreClientModule().DocumentReference;
    }

    export function isAdmin<T>(documentRef: DocumentReference<T>): documentRef is firestoreAdminModuleTypes.DocumentReference<T> {
        return isFirestoreAdmin() && documentRef instanceof firestoreAdminModule().DocumentReference;
    }

}


export type CollectionReference<T = DocumentData> = firestoreClientModuleTypes.CollectionReference<T> | firestoreAdminModuleTypes.CollectionReference<T>;

export namespace CollectionReference {

    export function isClient<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreClientModuleTypes.CollectionReference<T> {
        return isFirestoreClient() && collectionRef instanceof firestoreClientModule().CollectionReference;
    }

    export function isAdmin<T>(collectionRef: CollectionReference<T>): collectionRef is firestoreAdminModuleTypes.CollectionReference<T> {
        return isFirestoreAdmin() && collectionRef instanceof firestoreAdminModule().CollectionReference;
    }

}


export type Query<T = DocumentData> = firestoreClientModuleTypes.Query<T> | firestoreAdminModuleTypes.Query<T>;

export namespace Query {

    export function isClient<T>(query: Query<T>): query is firestoreClientModuleTypes.Query<T> {
        return isFirestoreClient() && query instanceof firestoreClientModule().Query;
    }

    export function isAdmin<T>(query: Query<T>): query is firestoreAdminModuleTypes.Query<T> {
        return isFirestoreAdmin() && query instanceof firestoreAdminModule().Query;
    }

}


export type Transaction = firestoreClientModuleTypes.Transaction | firestoreAdminModuleTypes.Transaction;

export namespace Transaction {

    export function isClient(transaction: Transaction): transaction is firestoreClientModuleTypes.Transaction {
        return isFirestoreClient() && transaction instanceof firestoreClientModule().Transaction;
    }

    export function isAdmin(transaction: Transaction): transaction is firestoreAdminModuleTypes.Transaction {
        return isFirestoreAdmin() && transaction instanceof firestoreAdminModule().Transaction;
    }
}


export type DocumentSnapshot<T = DocumentData> = firestoreClientModuleTypes.DocumentSnapshot<T> | firestoreAdminModuleTypes.DocumentSnapshot<T>;

export namespace DocumentSnapshot {

    export function isClient<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreClientModuleTypes.DocumentSnapshot<T> {
        return isFirestoreClient() && snapshot instanceof firestoreClientModule().Transaction;
    }

    export function isAdmin<T>(snapshot: DocumentSnapshot<T>): snapshot is firestoreAdminModuleTypes.DocumentSnapshot<T> {
        return snapshot instanceof firestoreAdminModule().Transaction;
    }
}


export type FieldValue = firestoreClientModuleTypes.FieldValue | firestoreAdminModuleTypes.FieldValue;

export namespace FieldValue {

    export function isClient(value: FieldValue): value is firestoreClientModuleTypes.FieldValue {
        return isFirestoreClient() && value instanceof firestoreClientModule().FieldValue;
    }

    export function isAdmin(value: FieldValue): value is firestoreAdminModuleTypes.FieldValue {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().FieldValue;
    }
}


export type FieldPath = firestoreClientModuleTypes.FieldPath | firestoreAdminModuleTypes.FieldPath;

export namespace FieldPath {

    export function isClient(value: FieldPath): value is firestoreClientModuleTypes.FieldPath {
        return isFirestoreClient() && value instanceof firestoreClientModule().FieldPath;
    }

    export function isAdmin(value: FieldPath): value is firestoreAdminModuleTypes.FieldPath {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().FieldPath;
    }
}


export type Timestamp = firestoreClientModuleTypes.Timestamp | firestoreAdminModuleTypes.Timestamp;

export namespace Timestamp {

    export function isClient(value: Timestamp): value is firestoreClientModuleTypes.Timestamp {
        return isFirestoreClient() && value instanceof firestoreClientModule().Timestamp;
    }

    export function isAdmin(value: Timestamp): value is firestoreAdminModuleTypes.Timestamp {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().Timestamp;
    }
}


export type GeoPoint = firestoreClientModuleTypes.GeoPoint | firestoreAdminModuleTypes.GeoPoint;

export namespace GeoPoint {

    export function isClient(value: GeoPoint): value is firestoreClientModuleTypes.GeoPoint {
        return isFirestoreClient() && value instanceof firestoreClientModule().GeoPoint;
    }

    export function isAdmin(value: GeoPoint): value is firestoreAdminModuleTypes.GeoPoint {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().GeoPoint;
    }
}


export type WriteBatch = firestoreClientModuleTypes.WriteBatch | firestoreAdminModuleTypes.WriteBatch;

export namespace WriteBatch {

    export function isClient(value: WriteBatch): value is firestoreClientModuleTypes.WriteBatch {
        return isFirestoreClient() && value instanceof firestoreClientModule().WriteBatch;
    }

    export function isAdmin(value: WriteBatch): value is firestoreAdminModuleTypes.WriteBatch {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().WriteBatch;
    }
}


export type QueryDocumentSnapshot<T = DocumentData> = firestoreClientModuleTypes.QueryDocumentSnapshot<T> | firestoreAdminModuleTypes.QueryDocumentSnapshot<T>;

export namespace QueryDocumentSnapshot {

    export function is(value: any): value is QueryDocumentSnapshot {
        if (isFirestoreClient()) {
            return value instanceof firestoreClientModule().QueryDocumentSnapshot;
        } else if (isFirestoreAdmin()) {
            return value instanceof firestoreAdminModule().QueryDocumentSnapshot;
        }

        return false;
    }

    export function isClient<T>(value: QueryDocumentSnapshot<T>): value is firestoreClientModuleTypes.QueryDocumentSnapshot<T> {
        return isFirestoreClient() && value instanceof firestoreClientModule().QueryDocumentSnapshot;
    }

    export function isAdmin<T>(value: QueryDocumentSnapshot): value is firestoreAdminModuleTypes.QueryDocumentSnapshot<T> {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().QueryDocumentSnapshot;
    }
}
