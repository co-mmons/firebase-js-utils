import {WriteBatch, DocumentReference, DocumentData, SetOptions, UpdateData, FieldPath} from "./types";
import {DocumentWrapper} from "./document-wrapper";

export class WriteBatchWrapper implements WriteBatch {

    constructor(private realWriteBatch: WriteBatch) {
    }

    set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): this {

        if (documentRef instanceof DocumentWrapper) {
            documentRef = documentRef.ref;
        }

        this.realWriteBatch.set(documentRef, data, options);
        return this;

    }
    
    update(...args: any): WriteBatch {
        if (args[0] instanceof DocumentWrapper) {
            args[0] = args[0].ref;
        }

        // @ts-ignore
        this.realWriteBatch.update(...args);

        return this;
    }

    delete(documentRef: DocumentReference): WriteBatch {
        if (documentRef instanceof DocumentWrapper) {
            documentRef = documentRef.ref;
        }

        this.realWriteBatch.delete(documentRef);

        return this;
    }
    
    commit(): Promise<void> {
        return this.realWriteBatch.commit();
    }


}