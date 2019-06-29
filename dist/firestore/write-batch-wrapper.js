"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_wrapper_1 = require("./document-wrapper");
var WriteBatchWrapper = /** @class */ (function () {
    function WriteBatchWrapper(realWriteBatch) {
        this.realWriteBatch = realWriteBatch;
    }
    WriteBatchWrapper.prototype.set = function (documentRef, data, options) {
        if (documentRef instanceof document_wrapper_1.DocumentWrapper) {
            documentRef = documentRef.ref;
        }
        this.realWriteBatch.set(documentRef, data, options);
        return this;
    };
    WriteBatchWrapper.prototype.update = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args[0] instanceof document_wrapper_1.DocumentWrapper) {
            args[0] = args[0].ref;
        }
        // @ts-ignore
        (_a = this.realWriteBatch).update.apply(_a, args);
        return this;
    };
    WriteBatchWrapper.prototype.delete = function (documentRef) {
        if (documentRef instanceof document_wrapper_1.DocumentWrapper) {
            documentRef = documentRef.ref;
        }
        this.realWriteBatch.delete(documentRef);
        return this;
    };
    WriteBatchWrapper.prototype.commit = function () {
        return this.realWriteBatch.commit();
    };
    return WriteBatchWrapper;
}());
exports.WriteBatchWrapper = WriteBatchWrapper;
//# sourceMappingURL=write-batch-wrapper.js.map