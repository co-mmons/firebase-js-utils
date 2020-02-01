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

export type Transaction = firestoreClient.Transaction | firestoreAdmin.Transaction;

export namespace Transaction {

    export function isClient(transaction: Transaction): transaction is firestoreClient.Transaction {
        return transaction instanceof firestoreClient.Transaction;
    }

    export function isAdmin(transaction: Transaction): transaction is firestoreAdmin.Transaction {
        return transaction instanceof firestoreAdmin.Transaction;
    }
}
