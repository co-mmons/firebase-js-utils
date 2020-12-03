import {FirebaseAdminModule} from "../FirebaseAdminModule";
import {FirebaseClientModule} from "../FirebaseClientModule";
import {firestoreAdminModule, firestoreClientModule, isFirestoreAdmin, isFirestoreClient} from "./mode";
import {DocumentData} from "./shared-types";

export type Firestore = FirebaseClientModule.firestore.Firestore | FirebaseAdminModule.firestore.Firestore;

export namespace Firestore {

    export function isClient(firestore: Firestore): firestore is FirebaseClientModule.firestore.Firestore {
        return isFirestoreClient() && firestore instanceof firestoreClientModule().Firestore;
    }

    export function isAdmin(firestore: Firestore): firestore is FirebaseAdminModule.firestore.Firestore {
        return isFirestoreAdmin() && firestore instanceof firestoreAdminModule().Firestore;
    }

}


export type DocumentReference<T = DocumentData> = FirebaseClientModule.firestore.DocumentReference<T> | FirebaseAdminModule.firestore.DocumentReference<T>;

export namespace DocumentReference {

    export function isClient<T>(documentRef: DocumentReference<T>): documentRef is FirebaseClientModule.firestore.DocumentReference<T> {
        return isFirestoreClient() && documentRef instanceof firestoreClientModule().DocumentReference;
    }

    export function isAdmin<T>(documentRef: DocumentReference<T>): documentRef is FirebaseAdminModule.firestore.DocumentReference<T> {
        return isFirestoreAdmin() && documentRef instanceof firestoreAdminModule().DocumentReference;
    }

}


export type CollectionReference<T = DocumentData> = FirebaseClientModule.firestore.CollectionReference<T> | FirebaseAdminModule.firestore.CollectionReference<T>;

export namespace CollectionReference {

    export function isClient<T>(collectionRef: CollectionReference<T>): collectionRef is FirebaseClientModule.firestore.CollectionReference<T> {
        return isFirestoreClient() && collectionRef instanceof firestoreClientModule().CollectionReference;
    }

    export function isAdmin<T>(collectionRef: CollectionReference<T>): collectionRef is FirebaseAdminModule.firestore.CollectionReference<T> {
        return isFirestoreAdmin() && collectionRef instanceof firestoreAdminModule().CollectionReference;
    }

}


export type Query<T = DocumentData> = FirebaseClientModule.firestore.Query<T> | FirebaseAdminModule.firestore.Query<T>;

export namespace Query {

    export function isClient<T>(query: Query<T>): query is FirebaseClientModule.firestore.Query<T> {
        return isFirestoreClient() && query instanceof firestoreClientModule().Query;
    }

    export function isAdmin<T>(query: Query<T>): query is FirebaseAdminModule.firestore.Query<T> {
        return isFirestoreAdmin() && query instanceof firestoreAdminModule().Query;
    }

}


export type Transaction = FirebaseClientModule.firestore.Transaction | FirebaseAdminModule.firestore.Transaction;

export namespace Transaction {

    export function isClient(transaction: Transaction): transaction is FirebaseClientModule.firestore.Transaction {
        return isFirestoreClient() && transaction instanceof firestoreClientModule().Transaction;
    }

    export function isAdmin(transaction: Transaction): transaction is FirebaseAdminModule.firestore.Transaction {
        return isFirestoreAdmin() && transaction instanceof firestoreAdminModule().Transaction;
    }
}


export type DocumentSnapshot<T = DocumentData> = FirebaseClientModule.firestore.DocumentSnapshot<T> | FirebaseAdminModule.firestore.DocumentSnapshot<T>;

export namespace DocumentSnapshot {

    export function isClient<T>(snapshot: DocumentSnapshot<T>): snapshot is FirebaseClientModule.firestore.DocumentSnapshot<T> {
        return isFirestoreClient() && snapshot instanceof firestoreClientModule().Transaction;
    }

    export function isAdmin<T>(snapshot: DocumentSnapshot<T>): snapshot is FirebaseAdminModule.firestore.DocumentSnapshot<T> {
        return snapshot instanceof firestoreAdminModule().Transaction;
    }
}


export type FieldValue = FirebaseClientModule.firestore.FieldValue | FirebaseAdminModule.firestore.FieldValue;

export namespace FieldValue {

    export function isClient(value: FieldValue): value is FirebaseClientModule.firestore.FieldValue {
        return isFirestoreClient() && value instanceof firestoreClientModule().FieldValue;
    }

    export function isAdmin(value: FieldValue): value is FirebaseAdminModule.firestore.FieldValue {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().FieldValue;
    }
}


export type FieldPath = FirebaseClientModule.firestore.FieldPath | FirebaseAdminModule.firestore.FieldPath;

export namespace FieldPath {

    export function isClient(value: FieldPath): value is FirebaseClientModule.firestore.FieldPath {
        return isFirestoreClient() && value instanceof firestoreClientModule().FieldPath;
    }

    export function isAdmin(value: FieldPath): value is FirebaseAdminModule.firestore.FieldPath {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().FieldPath;
    }
}


export type Timestamp = FirebaseClientModule.firestore.Timestamp | FirebaseAdminModule.firestore.Timestamp;

export namespace Timestamp {

    export function isClient(value: Timestamp): value is FirebaseClientModule.firestore.Timestamp {
        return isFirestoreClient() && value instanceof firestoreClientModule().Timestamp;
    }

    export function isAdmin(value: Timestamp): value is FirebaseAdminModule.firestore.Timestamp {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().Timestamp;
    }
}


export type GeoPoint = FirebaseClientModule.firestore.GeoPoint | FirebaseAdminModule.firestore.GeoPoint;

export namespace GeoPoint {

    export function isClient(value: GeoPoint): value is FirebaseClientModule.firestore.GeoPoint {
        return isFirestoreClient() && value instanceof firestoreClientModule().GeoPoint;
    }

    export function isAdmin(value: GeoPoint): value is FirebaseAdminModule.firestore.GeoPoint {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().GeoPoint;
    }
}


export type WriteBatch = FirebaseClientModule.firestore.WriteBatch | FirebaseAdminModule.firestore.WriteBatch;

export namespace WriteBatch {

    export function isClient(value: WriteBatch): value is FirebaseClientModule.firestore.WriteBatch {
        return isFirestoreClient() && value instanceof firestoreClientModule().WriteBatch;
    }

    export function isAdmin(value: WriteBatch): value is FirebaseAdminModule.firestore.WriteBatch {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().WriteBatch;
    }
}


export type QueryDocumentSnapshot<T = DocumentData> = FirebaseClientModule.firestore.QueryDocumentSnapshot<T> | FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>;

export namespace QueryDocumentSnapshot {

    export function is(value: any): value is QueryDocumentSnapshot {
        if (isFirestoreClient()) {
            return value instanceof firestoreClientModule().QueryDocumentSnapshot;
        } else if (isFirestoreAdmin()) {
            return value instanceof firestoreAdminModule().QueryDocumentSnapshot;
        }

        return false;
    }

    export function isClient<T>(value: QueryDocumentSnapshot<T>): value is FirebaseClientModule.firestore.QueryDocumentSnapshot<T> {
        return isFirestoreClient() && value instanceof firestoreClientModule().QueryDocumentSnapshot;
    }

    export function isAdmin<T>(value: QueryDocumentSnapshot): value is FirebaseAdminModule.firestore.QueryDocumentSnapshot<T> {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().QueryDocumentSnapshot;
    }
}
