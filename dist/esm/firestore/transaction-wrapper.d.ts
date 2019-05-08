import { DocumentData, DocumentReference, DocumentSnapshot, Query, SetOptions, Transaction } from "./types";
export declare class TransactionWrapper implements Transaction {
    readonly transaction: Transaction;
    constructor(transaction: Transaction);
    protected mutate(query?: Query): TransactionWrapper;
    delete(documentRef: DocumentReference): this;
    get(documentRef: DocumentReference): Promise<DocumentSnapshot>;
    set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): this;
    update(...args: any[]): this;
}
