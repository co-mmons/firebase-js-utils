import {firestoreClient, firestoreAdmin} from "./types";
import {DocumentData} from "./shared-types";

export type Firestore = firestoreClient.FirebaseFirestore | firestoreAdmin.Firestore;

export type DocumentReference<T = DocumentData> = firestoreClient.DocumentReference<T> | firestoreAdmin.DocumentReference<T>;

export type Transaction = firestoreClient.Transaction | firestoreAdmin.Transaction;
