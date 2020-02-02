import { DocumentData } from "./shared-types";
import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "./types";
export declare function docsData<T = DocumentData>(query: firestoreAdminModuleTypes.Query<T>): Promise<T[]>;
export declare function docsData<T = DocumentData>(query: firestoreClientModuleTypes.Query<T>, options?: firestoreClientModuleTypes.GetOptions & firestoreClientModuleTypes.SnapshotOptions): Promise<T[]>;
