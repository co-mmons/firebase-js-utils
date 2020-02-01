import { DocumentData } from "./shared-types";
import { firestoreAdmin, firestoreClient } from "./types";
export declare function docData<T = DocumentData>(doc: firestoreAdmin.DocumentReference<T>): Promise<T>;
export declare function docData<T = DocumentData>(doc: firestoreClient.DocumentReference<T>, options?: firestoreClient.GetOptions & firestoreClient.SnapshotOptions): Promise<T>;
