import { DocumentWrapper } from "./document-wrapper";
export class TransactionWrapper {
    constructor(transaction) {
        this.transaction = transaction;
    }
    mutate(query) {
        return new TransactionWrapper(this.transaction);
    }
    delete(documentRef) {
        let doc = documentRef;
        if (documentRef instanceof DocumentWrapper) {
            doc = documentRef.ref;
        }
        this.transaction.delete(doc);
        return this;
    }
    get(documentRef) {
        let doc = documentRef;
        if (documentRef instanceof DocumentWrapper) {
            doc = documentRef.ref;
        }
        return this.transaction.get(doc);
    }
    set(documentRef, data, options) {
        let doc = documentRef;
        if (documentRef instanceof DocumentWrapper) {
            doc = documentRef.ref;
        }
        this.transaction.set(doc, data, options);
        return this;
    }
    update(...args) {
        let doc = args[0];
        if (doc instanceof DocumentWrapper) {
            args[0] = doc.ref;
        }
        this.transaction.update.call(this.transaction, args);
        return this;
    }
}
//# sourceMappingURL=transaction-wrapper.js.map