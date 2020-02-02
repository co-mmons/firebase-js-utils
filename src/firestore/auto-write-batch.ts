import {UpdateData} from "./shared-types";
import {firestoreAdmin, firestoreClient} from "./types";
import {DocumentReference, FieldPath, Firestore} from "./union-types";

export abstract class AutoWriteBatch {

    protected constructor(private readonly firestore: Firestore) {
    }

    onCommit: (count: number, results?: any) => void;

    private batch$: firestoreClient.WriteBatch | firestoreAdmin.WriteBatch;

    private limit$: number = 499;

    private count$: number = 0;

    private get batch(): firestoreClient.WriteBatch | firestoreAdmin.WriteBatch {
        if (!this.batch$) {
            this.batch$ = this.firestore.batch();
        }

        return this.batch$;
    }

    private get clientBatch(): firestoreClient.WriteBatch {
        return this.batch instanceof firestoreClient.WriteBatch && this.batch;
    }

    private get adminBatch(): firestoreAdmin.WriteBatch {
        return this.batch instanceof firestoreAdmin.WriteBatch && this.batch;
    }

    get count(): number {
        return this.count$;
    }

    get limit() {
        return this.limit$;
    }

    set limit(limit: number) {
        this.limit$ = limit > 0 && limit <= 499 ? limit : 499;
    }

    isFull() {
        return this.count$ >= this.limit$;
    }

    async autoCommit(): Promise<{count: number, results?: any}> {

        if (this.count$ > this.limit$) {
            const count = this.count$;
            const results = await this.batch.commit();
            this.count$ = 0;

            if (this.onCommit) {
                try {
                    this.onCommit(count, results);
                } catch (e) {
                    console.error(e);
                }
            }

            return {count, results};
        }

        return {count: 0};
    }

    async commit(): Promise<{count: number, results?: any}> {

        if (this.count$ > 0) {
            const count = this.count$;
            const results = await this.batch.commit();
            this.count$ = 0;

            if (this.onCommit) {
                try {
                    this.onCommit(count, results);
                } catch (e) {
                    console.error(e);
                }
            }

            return {count, results};
        }

        return {count: 0};
    }

    delete(documentRef: DocumentReference<any>): this {
        this.count$++;
        this.batch.delete(documentRef as any);
        return this;
    }

    set<T = any>(documentRef: DocumentReference<T>, data: T, options?: any): this {

        this.count$++;

        if (DocumentReference.isClient(documentRef)) {
            this.clientBatch.set(documentRef, data, options);
        } else if (DocumentReference.isAdmin(documentRef)) {
            this.adminBatch.set(documentRef, data, options);
        }

        return this;
    }

    update(documentRef: DocumentReference<any>, dataOrField: UpdateData | string | FieldPath, value?: any, ...moreFieldsAndValues: any[]): this {

        this.count$++;

        if (arguments.length === 2) {
            if (DocumentReference.isClient(documentRef)) {
                this.clientBatch.update(documentRef, dataOrField as UpdateData);
            } else if (DocumentReference.isAdmin(documentRef)) {
                this.adminBatch.update(documentRef, dataOrField as UpdateData);
            }
        } else {
            if (DocumentReference.isClient(documentRef)) {
                this.clientBatch.update(documentRef, dataOrField as (string | firestoreClient.FieldPath), value, ...moreFieldsAndValues);
            } else if (DocumentReference.isAdmin(documentRef)) {
                this.adminBatch.update(documentRef, dataOrField as (string | firestoreAdmin.FieldPath), value, ...moreFieldsAndValues);
            }
        }

        return this;
    }

}

interface AutoWriteBatchClientMethods {
    commit(): Promise<{count: number}>;
    set<T = any>(documentRef: firestoreClient.DocumentReference<T>, data: T, options?: firestoreClient.SetOptions): this;
    update(documentRef: firestoreClient.DocumentReference<any>, dataOrField: UpdateData | string | firestoreClient.FieldPath, value?: any, ...moreFieldsAndValues: any[]): this;
}

export class AutoWriteBatchClient extends AutoWriteBatch implements AutoWriteBatchClientMethods {

    constructor(firestore: firestoreClient.FirebaseFirestore) {
        super(firestore);
    }

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
    update(documentRef: firestoreAdmin.DocumentReference<any>, data: UpdateData, precondition?: firestoreAdmin.Precondition): this;

    /**
     * Deletes the document referred to by the provided `DocumentReference`.
     *
     * @param documentRef A reference to the document to be deleted.
     * @param precondition A Precondition to enforce for this delete.
     * @return This `WriteBatch` instance. Used for chaining method calls.
     */
    delete(documentRef: firestoreAdmin.DocumentReference<any>, precondition?: firestoreAdmin.Precondition): this;

    commit(): Promise<{count: number, results?: firestoreAdmin.WriteResult[]}>;

}

export class AutoWriteBatchAdmin extends AutoWriteBatch implements AutoWriteBatchAdminMethods {

    constructor(firestore: firestoreAdmin.Firestore) {
        super(firestore);
    }

}

export function autoWriteBatch(firestore: Firestore): typeof firestore extends firestoreClient.FirebaseFirestore ? AutoWriteBatchClient : AutoWriteBatchAdmin {
    if (firestore instanceof firestoreClient.FirebaseFirestore) {
        return new AutoWriteBatchClient(firestore);
    } else if (firestore instanceof firestoreAdmin.Firestore) {
        return new AutoWriteBatchAdmin(firestore);
    }
}
