import { firestoreClient, firestoreAdmin } from "./types";
import { DocumentData } from "./shared-types";
export declare type Firestore = firestoreClient.FirebaseFirestore | firestoreAdmin.Firestore;
export declare type DocumentReference<T = DocumentData> = firestoreClient.DocumentReference<T> | firestoreAdmin.DocumentReference<T>;
export declare type Transaction = firestoreClient.Transaction | firestoreAdmin.Transaction;
