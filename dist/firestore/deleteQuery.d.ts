import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
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
export declare function deleteQuery(query: FirebaseAdminModule.firestore.Query, options?: DeleteOptionsAdmin): any;
export declare function deleteQuery(query: FirebaseClientModule.firestore.Query, options?: DeleteOptions): any;
