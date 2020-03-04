import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "./types";
export interface DeleteOptions {
    readLimit?: number;
    batch?: boolean;
    batchRetryCount?: number;
    batchRetryDelay?: number;
}
/**
 * Options in admin mode.
 */
export interface DeleteOptionsAdmin extends DeleteOptions {
    subcollections?: boolean;
}
export declare function deleteQuery(query: firestoreAdminModuleTypes.Query, options?: DeleteOptionsAdmin): any;
export declare function deleteQuery(query: firestoreClientModuleTypes.Query, options?: DeleteOptions): any;
