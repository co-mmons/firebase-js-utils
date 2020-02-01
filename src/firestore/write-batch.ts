import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {UpdateData} from "./types/shared";
import {DocumentReference, Firestore} from "./types/unions";

export abstract class WriteBatch {

    protected constructor(private readonly firestore: Firestore) {
    }

    private batch$: client.WriteBatch | admin.WriteBatch;

    private limit$: number = 499;

    private count$: number = 0;

    private get batch(): client.WriteBatch | admin.WriteBatch {
        if (!this.batch$) {
            this.batch$ = this.firestore.batch();
        }

        return this.batch$;
    }

    private get clientBatch(): client.WriteBatch {
        return this.batch instanceof client.WriteBatch && this.batch;
    }

    private get adminBatch(): admin.WriteBatch {
        return this.batch instanceof admin.WriteBatch && this.batch;
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
            return {count, results};
        }

        return {count: 0};
    }

    async commit(): Promise<{count: number, results?: any}> {

        if (this.count$ > 0) {
            const count = this.count$;
            const results = await this.batch.commit();
            this.count$ = 0;
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

        if (documentRef instanceof client.DocumentReference) {
            this.clientBatch.set(documentRef, data, options);
        } else if (documentRef instanceof admin.DocumentReference) {
            this.adminBatch.set(documentRef, data, options);
        }

        return this;
    }

    update(documentRef: DocumentReference<any>, dataOrField: UpdateData | string | client.FieldPath | admin.FieldPath, value?: any, ...moreFieldsAndValues: any[]): this {

        this.count$++;

        if (arguments.length === 2) {
            if (documentRef instanceof client.DocumentReference) {
                this.clientBatch.update(documentRef, dataOrField as UpdateData);
            } else if (documentRef instanceof admin.DocumentReference) {
                this.adminBatch.update(documentRef, dataOrField as UpdateData);
            }
        } else {
            if (documentRef instanceof client.DocumentReference) {
                this.clientBatch.update(documentRef, dataOrField as (string | client.FieldPath), value, ...moreFieldsAndValues);
            } else if (documentRef instanceof admin.DocumentReference) {
                this.adminBatch.update(documentRef, dataOrField as (string | admin.FieldPath), value, ...moreFieldsAndValues);
            }
        }

        return this;
    }

}

interface WriteBatchClientExtensions {
    commit(): Promise<{count: number}>;
    set<T = any>(documentRef: client.DocumentReference<T>, data: T, options?: client.SetOptions): this;
    update(documentRef: client.DocumentReference<any>, dataOrField: UpdateData | string | client.FieldPath, value?: any, ...moreFieldsAndValues: any[]): this;
}

export class WriteBatchClient extends WriteBatch implements WriteBatchClientExtensions {

    constructor(firestore: client.FirebaseFirestore) {
        super(firestore);
    }

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

    commit(): Promise<{count: number, results?: admin.WriteResult[]}>;

}

export class WriteBatchAdmin extends WriteBatch implements WriteBatchAdminExtensions {

    constructor(firestore: admin.Firestore) {
        super(firestore);
    }

}

export function writeBatch(firestore: client.FirebaseFirestore): WriteBatchClient;

export function writeBatch(firestore: admin.Firestore): WriteBatchAdmin;

export function writeBatch(firestore: Firestore): WriteBatchClient | WriteBatchAdmin {
    if (firestore instanceof client.FirebaseFirestore) {
        return new WriteBatchClient(firestore);
    } else if (firestore instanceof admin.Firestore) {
        return new WriteBatchAdmin(firestore);
    }
}
