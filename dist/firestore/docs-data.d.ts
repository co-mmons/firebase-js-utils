import { DocumentData } from "./shared-types";
import { firestoreAdmin, firestoreClient } from "./types";
export declare function docsData<T = DocumentData>(query: firestoreAdmin.Query<T>): Promise<T[]>;
export declare function docsData<T = DocumentData>(query: firestoreClient.Query<T>, options?: firestoreClient.GetOptions & firestoreClient.SnapshotOptions): Promise<T[]>;
