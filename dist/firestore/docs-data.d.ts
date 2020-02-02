import { DocumentData } from "./shared-types";
import { firestoreAdminTypes, firestoreClientTypes } from "./types";
export declare function docsData<T = DocumentData>(query: firestoreAdminTypes.Query<T>): Promise<T[]>;
export declare function docsData<T = DocumentData>(query: firestoreClientTypes.Query<T>, options?: firestoreClientTypes.GetOptions & firestoreClientTypes.SnapshotOptions): Promise<T[]>;
