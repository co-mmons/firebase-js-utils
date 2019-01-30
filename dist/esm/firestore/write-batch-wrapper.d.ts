import { WriteBatch, DocumentReference, DocumentData, SetOptions } from "./types";
export declare class WriteBatchWrapper implements WriteBatch {
    private realWriteBatch;
    constructor(realWriteBatch: WriteBatch);
    set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): this;
    update(...args: any): WriteBatch;
    delete(documentRef: DocumentReference): WriteBatch;
    commit(): Promise<void>;
}
