import { UpdateData } from "./shared-types";
import { firestoreAdminTypes, firestoreClientTypes } from "./types";
import { DocumentReference, FieldPath, Firestore } from "./union-types";
export declare abstract class AutoWriteBatch {
    private readonly firestore;
    protected constructor(firestore: Firestore);
    onCommit: (count: number, results?: any) => void;
    private batch$;
    private limit$;
    private count$;
    private get batch();
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
    update(documentRef: DocumentReference<any>, dataOrField: UpdateData | string | FieldPath, value?: any, ...moreFieldsAndValues: any[]): this;
}
interface AutoWriteBatchClientMethods {
    commit(): Promise<{
        count: number;
    }>;
    set<T = any>(documentRef: firestoreClientTypes.DocumentReference<T>, data: T, options?: firestoreClientTypes.SetOptions): this;
    update(documentRef: firestoreClientTypes.DocumentReference<any>, dataOrField: UpdateData | string | firestoreClientTypes.FieldPath, value?: any, ...moreFieldsAndValues: any[]): this;
}
export declare class AutoWriteBatchClient extends AutoWriteBatch implements AutoWriteBatchClientMethods {
    constructor(firestore: firestoreClientTypes.Firestore);
}
interface AutoWriteBatchAdminMethods {
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
    update(documentRef: firestoreAdminTypes.DocumentReference<any>, data: UpdateData, precondition?: firestoreAdminTypes.Precondition): this;
    /**
     * Deletes the document referred to by the provided `DocumentReference`.
     *
     * @param documentRef A reference to the document to be deleted.
     * @param precondition A Precondition to enforce for this delete.
     * @return This `WriteBatch` instance. Used for chaining method calls.
     */
    delete(documentRef: firestoreAdminTypes.DocumentReference<any>, precondition?: firestoreAdminTypes.Precondition): this;
    commit(): Promise<{
        count: number;
        results?: firestoreAdminTypes.WriteResult[];
    }>;
}
export declare class AutoWriteBatchAdmin extends AutoWriteBatch implements AutoWriteBatchAdminMethods {
    constructor(firestore: firestoreAdminTypes.Firestore);
}
export declare function autoWriteBatch(firestore: Firestore): typeof firestore extends firestoreClientTypes.Firestore ? AutoWriteBatchClient : AutoWriteBatchAdmin;
export {};
