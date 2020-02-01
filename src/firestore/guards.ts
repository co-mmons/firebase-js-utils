import {firestoreAdmin, firestoreClient} from "./types";
import {Firestore} from "./union-types";

export function isFirestoreAdmin(firestore: Firestore): firestore is firestoreAdmin.Firestore {
    return firestore instanceof firestoreAdmin.Firestore;
}

export function isFirestoreClient(firestore: Firestore): firestore is firestoreClient.FirebaseFirestore {
    return firestore instanceof firestoreClient.FirebaseFirestore;
}
