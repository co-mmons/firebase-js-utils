import { UpdateData } from "./shared-types";
import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "./types";
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
    set<T = any>(documentRef: firestoreClientModuleTypes.DocumentReference<T>, data: T, options?: firestoreClientModuleTypes.SetOptions): this;
    update(documentRef: firestoreClientModuleTypes.DocumentReference<any>, dataOrField: UpdateData | string | firestoreClientModuleTypes.FieldPath, value?: any, ...moreFieldsAndValues: any[]): this;
}
export declare class AutoWriteBatchClient extends AutoWriteBatch implements AutoWriteBatchClientMethods {
    constructor(firestore: firestoreClientModuleTypes.Firestore);
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
    update(documentRef: firestoreAdminModuleTypes.DocumentReference<any>, data: UpdateData, precondition?: firestoreAdminModuleTypes.Precondition): this;
    /**
     * Deletes the document referred to by the provided `DocumentReference`.
     *
     * @param documentRef A reference to the document to be deleted.
     * @param precondition A Precondition to enforce for this delete.
     * @return This `WriteBatch` instance. Used for chaining method calls.
     */
    delete(documentRef: firestoreAdminModuleTypes.DocumentReference<any>, precondition?: firestoreAdminModuleTypes.Precondition): this;
    commit(): Promise<{
        count: number;
        results?: firestoreAdminModuleTypes.WriteResult[];
    }>;
}
export declare class AutoWriteBatchAdmin extends AutoWriteBatch implements AutoWriteBatchAdminMethods {
    constructor(firestore: firestoreAdminModuleTypes.Firestore);
}
export declare function autoWriteBatch(firestore: Firestore): typeof firestore extends firestoreClientModuleTypes.Firestore ? AutoWriteBatchClient : AutoWriteBatchAdmin;
export {};
