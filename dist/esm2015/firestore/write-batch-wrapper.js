import { DocumentWrapper } from "./document-wrapper";
export class WriteBatchWrapper {
    constructor(realWriteBatch) {
        this.realWriteBatch = realWriteBatch;
    }
    set(documentRef, data, options) {
        if (documentRef instanceof DocumentWrapper) {
            documentRef = documentRef.ref;
        }
        this.realWriteBatch.set(documentRef, data, options);
        return this;
    }
    update(...args) {
        if (args[0] instanceof DocumentWrapper) {
            args[0] = args[0].ref;
        }
        // @ts-ignore
        this.realWriteBatch.update(...args);
        return this;
    }
    delete(documentRef) {
        if (documentRef instanceof DocumentWrapper) {
            documentRef = documentRef.ref;
        }
        this.realWriteBatch.delete(documentRef);
        return this;
    }
    commit() {
        return this.realWriteBatch.commit();
    }
}
//# sourceMappingURL=write-batch-wrapper.js.map