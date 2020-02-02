import { DocumentData } from "./shared-types";
import { firestoreAdminTypes, firestoreClientTypes } from "./types";
export declare function docData<T = DocumentData>(doc: firestoreAdminTypes.DocumentReference<T>): Promise<T>;
export declare function docData<T = DocumentData>(doc: firestoreClientTypes.DocumentReference<T>, options?: firestoreClientTypes.GetOptions & firestoreClientTypes.SnapshotOptions): Promise<T>;
