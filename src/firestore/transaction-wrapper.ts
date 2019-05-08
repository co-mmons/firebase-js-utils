import {DocumentWrapper} from "./document-wrapper";
import {DocumentData, DocumentReference, DocumentSnapshot, Query, SetOptions, Transaction} from "./types";

export class TransactionWrapper implements Transaction {

    constructor(public readonly transaction: Transaction) {
    }

    protected mutate(query?: Query) {
        return new TransactionWrapper(this.transaction);
    }

    delete(documentRef: DocumentReference): this {

        let doc = documentRef;

        if (documentRef instanceof DocumentWrapper) {
            doc = documentRef.ref
        }

        this.transaction.delete(doc);

        return this;
    }

    get(documentRef: DocumentReference): Promise<DocumentSnapshot> {

        let doc = documentRef;

        if (documentRef instanceof DocumentWrapper) {
            doc = documentRef.ref
        }

        return this.transaction.get(doc);
    }

    set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): this {

        let doc = documentRef;

        if (documentRef instanceof DocumentWrapper) {
            doc = documentRef.ref
        }

        this.transaction.set(doc, data, options);

        return this;
    }

    update(...args: any[]): this {

        let doc = args[0];

        if (doc instanceof DocumentWrapper) {
            args[0] = doc.ref;
        }

        this.transaction.update.call(this.transaction, args);

        return this;
    }

}
