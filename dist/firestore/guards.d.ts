import { firestoreAdmin, firestoreClient } from "./types";
import { Firestore } from "./union-types";
export declare function isFirestoreAdmin(firestore: Firestore): firestore is firestoreAdmin.Firestore;
export declare function isFirestoreClient(firestore: Firestore): firestore is firestoreClient.FirebaseFirestore;
