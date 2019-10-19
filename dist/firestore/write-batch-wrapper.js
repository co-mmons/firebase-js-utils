"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const document_wrapper_1 = require("./document-wrapper");
class WriteBatchWrapper {
    constructor(realWriteBatch) {
        this.realWriteBatch = realWriteBatch;
    }
    set(documentRef, data, options) {
        if (documentRef instanceof document_wrapper_1.DocumentWrapper) {
            documentRef = documentRef.ref;
        }
        this.realWriteBatch.set(documentRef, data, options);
        return this;
    }
    update(...args) {
        if (args[0] instanceof document_wrapper_1.DocumentWrapper) {
            args[0] = args[0].ref;
        }
        // @ts-ignore
        this.realWriteBatch.update(...args);
        return this;
    }
    delete(documentRef) {
        if (documentRef instanceof document_wrapper_1.DocumentWrapper) {
            documentRef = documentRef.ref;
        }
        this.realWriteBatch.delete(documentRef);
        return this;
    }
    commit() {
        return this.realWriteBatch.commit();
    }
}
exports.WriteBatchWrapper = WriteBatchWrapper;
//# sourceMappingURL=write-batch-wrapper.js.map