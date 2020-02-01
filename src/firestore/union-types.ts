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

    export function isClient(documentRef: DocumentReference): documentRef is firestoreClient.DocumentReference {
        return documentRef instanceof firestoreClient.DocumentReference;
    }

    export function isAdmin(documentRef: DocumentReference): documentRef is firestoreAdmin.DocumentReference {
        return documentRef instanceof firestoreAdmin.DocumentReference;
    }

}


export type CollectionReference<T = DocumentData> = firestoreClient.CollectionReference<T> | firestoreAdmin.CollectionReference<T>;

export namespace CollectionReference {

    export function isClient(collectionRef: CollectionReference): collectionRef is firestoreClient.CollectionReference {
        return collectionRef instanceof firestoreClient.CollectionReference;
    }

    export function isAdmin(collectionRef: CollectionReference): collectionRef is firestoreAdmin.CollectionReference {
        return collectionRef instanceof firestoreAdmin.CollectionReference;
    }

}


export type Query<T = DocumentData> = firestoreClient.Query<T> | firestoreAdmin.Query<T>;

export namespace Query {

    export function isClient(query: Query): query is firestoreClient.Query {
        return query instanceof firestoreClient.Query;
    }

    export function isAdmin(query: Query): query is firestoreAdmin.Query {
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


export type DocumentSnapshot = firestoreClient.DocumentSnapshot | firestoreAdmin.DocumentSnapshot;

export namespace DocumentSnapshot {

    export function isClient(snapshot: DocumentSnapshot): snapshot is firestoreClient.DocumentSnapshot {
        return snapshot instanceof firestoreClient.Transaction;
    }

    export function isAdmin(snapshot: DocumentSnapshot): snapshot is firestoreAdmin.DocumentSnapshot {
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
