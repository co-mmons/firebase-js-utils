import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { UpdateData } from "./shared-types";
import { DocumentReference, Firestore } from "./union-types";
export declare abstract class WriteBatch {
    private readonly firestore;
    protected constructor(firestore: Firestore);
    private batch$;
    private limit$;
    private count$;
    private get batch();
    private get clientBatch();
    private get adminBatch();
    get count(): number;
    get limit(): number;
    set limit(limit: number);
    isFull(): boolean;
    autoCommit(): Promise<{
        count: number;
        results?: any;
    }>;
    commit(): Promise<{
        count: number;
        results?: any;
    }>;
    delete(documentRef: DocumentReference<any>): this;
    set<T = any>(documentRef: DocumentReference<T>, data: T, options?: any): this;
    update(documentRef: DocumentReference<any>, dataOrField: UpdateData | string | client.FieldPath | admin.FieldPath, value?: any, ...moreFieldsAndValues: any[]): this;
}
interface WriteBatchClientExtensions {
    commit(): Promise<{
        count: number;
    }>;
    set<T = any>(documentRef: client.DocumentReference<T>, data: T, options?: client.SetOptions): this;
    update(documentRef: client.DocumentReference<any>, dataOrField: UpdateData | string | client.FieldPath, value?: any, ...moreFieldsAndValues: any[]): this;
}
export declare class WriteBatchClient extends WriteBatch implements WriteBatchClientExtensions {
    constructor(firestore: client.FirebaseFirestore);
}
interface WriteBatchAdminExtensions {
    /**
     * Update fields of the document referred to by the provided
     * `DocumentReference`. If the document doesn't yet exist, the update fails
     * and the entire batch will be rejected.
     *
     * Nested fields can be updated by providing dot-separated field path
     * strings.
     *
     * @param documentRef A reference to the document to be updated.
     * @param data An object containing the fields and values with which to
     * update the document.
     * @param precondition A Precondition to enforce on this update.
     * @return This `WriteBatch` instance. Used for chaining method calls.
     */
    update(documentRef: admin.DocumentReference<any>, data: UpdateData, precondition?: admin.Precondition): this;
    /**
     * Deletes the document referred to by the provided `DocumentReference`.
     *
     * @param documentRef A reference to the document to be deleted.
     * @param precondition A Precondition to enforce for this delete.
     * @return This `WriteBatch` instance. Used for chaining method calls.
     */
    delete(documentRef: admin.DocumentReference<any>, precondition?: admin.Precondition): this;
    commit(): Promise<{
        count: number;
        results?: admin.WriteResult[];
    }>;
}
export declare class WriteBatchAdmin extends WriteBatch implements WriteBatchAdminExtensions {
    constructor(firestore: admin.Firestore);
}
export declare function writeBatch(firestore: client.FirebaseFirestore): WriteBatchClient;
export declare function writeBatch(firestore: admin.Firestore): WriteBatchAdmin;
export {};
