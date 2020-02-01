import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
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
export declare function deleteQuery(query: admin.Query, options?: DeleteOptionsAdmin): any;
export declare function deleteQuery(query: client.Query, options?: DeleteOptions): any;
