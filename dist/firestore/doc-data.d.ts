import { DocumentData } from "./shared-types";
import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "./types";
export declare function docData<T = DocumentData>(doc: firestoreAdminModuleTypes.DocumentReference<T>): Promise<T>;
export declare function docData<T = DocumentData>(doc: firestoreClientModuleTypes.DocumentReference<T>, options?: firestoreClientModuleTypes.GetOptions & firestoreClientModuleTypes.SnapshotOptions): Promise<T>;
