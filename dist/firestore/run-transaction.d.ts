import { firestoreAdmin, firestoreClient } from "./types";
export declare function runTransaction<T>(firestore: firestoreClient.FirebaseFirestore, updateFunction: (transaction: firestoreClient.Transaction) => Promise<T>): any;
export declare function runTransaction<T>(firestore: firestoreAdmin.Firestore, updateFunction: (transaction: firestoreAdmin.Transaction) => Promise<T>): any;
