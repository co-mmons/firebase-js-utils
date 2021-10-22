import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
import { UpdateData } from "./shared-types";
import { DocumentReference, FieldPath, Firestore, WriteBatch } from "./union-types";
export declare abstract class AutoWriteBatch {
    private readonly firestore;
    protected constructor(firestore: Firestore);
    onCommit: (count: number, results?: any) => void;
    protected batch$: WriteBatch;
    protected limit$: number;
    protected count$: number;
    protected committedCount$: number;
    protected get batch(): WriteBatch;
    get count(): number;
    get limit(): number;
    set limit(limit: number);
    isFull(): boolean;
    resetCommittedCount(): void;
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
    set<T = any>(documentRef: FirebaseClientModule.firestore.DocumentReference<T>, data: T, options?: FirebaseClientModule.firestore.SetOptions): this;
    update(documentRef: FirebaseClientModule.firestore.DocumentReference<any>, dataOrField: UpdateData | string | FirebaseClientModule.firestore.FieldPath, value?: any, ...moreFieldsAndValues: any[]): this;
}
export declare class AutoWriteBatchClient extends AutoWriteBatch implements AutoWriteBatchClientMethods {
    constructor(firestore: FirebaseClientModule.firestore.Firestore);
}
interface AutoWriteBatchAdminMethods {
    create(documentRef: FirebaseAdminModule.firestore.DocumentReference<any>, data: UpdateData): this;
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
    update(documentRef: FirebaseAdminModule.firestore.DocumentReference<any>, data: UpdateData, precondition?: FirebaseAdminModule.firestore.Precondition): this;
    /**
     * Deletes the document referred to by the provided `DocumentReference`.
     *
     * @param documentRef A reference to the document to be deleted.
     * @param precondition A Precondition to enforce for this delete.
     * @return This `WriteBatch` instance. Used for chaining method calls.
     */
    delete(documentRef: FirebaseAdminModule.firestore.DocumentReference<any>, precondition?: FirebaseAdminModule.firestore.Precondition): this;
    commit(): Promise<{
        count: number;
        results?: FirebaseAdminModule.firestore.WriteResult[];
    }>;
}
export declare class AutoWriteBatchAdmin extends AutoWriteBatch implements AutoWriteBatchAdminMethods {
    constructor(firestore: FirebaseAdminModule.firestore.Firestore);
    private get adminBatch();
    create(documentRef: FirebaseAdminModule.firestore.DocumentReference<any>, data: any): this;
}
export declare function autoWriteBatch(firestore: FirebaseAdminModule.firestore.Firestore): AutoWriteBatchAdmin;
export declare function autoWriteBatch(firestore: FirebaseClientModule.firestore.Firestore): AutoWriteBatchClient;
export {};
