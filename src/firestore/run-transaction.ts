import {Firestore, Transaction} from "./union-types";
import {firestoreAdmin, firestoreClient} from "./types";

export function runTransaction<T>(firestore: firestoreClient.FirebaseFirestore, updateFunction: (transaction: firestoreClient.Transaction) => Promise<T>);

export function runTransaction<T>(firestore: firestoreAdmin.Firestore, updateFunction: (transaction: firestoreAdmin.Transaction) => Promise<T>);

export function runTransaction<T>(firestore: Firestore, updateFunction: ((transaction: firestoreClient.Transaction) => Promise<T>) | ((transaction: firestoreAdmin.Transaction) => Promise<T>)): Promise<T> {

    if (firestore instanceof firestoreClient.FirebaseFirestore) {
        return firestore.runTransaction<T>(updateFunction as any);
    } else if (firestore instanceof firestoreAdmin.Firestore) {
        return firestore.runTransaction<T>(updateFunction as any);
    } else {
        throw new Error("Invalid Firestore instance");
    }

}
