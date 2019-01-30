import { DocumentWrapper } from "./document-wrapper";
var WriteBatchWrapper = /** @class */ (function () {
    function WriteBatchWrapper(realWriteBatch) {
        this.realWriteBatch = realWriteBatch;
    }
    WriteBatchWrapper.prototype.set = function (documentRef, data, options) {
        if (documentRef instanceof DocumentWrapper) {
            documentRef = documentRef.ref;
        }
        this.realWriteBatch.set(documentRef, data, options);
        return this;
    };
    WriteBatchWrapper.prototype.update = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        if (args[0] instanceof DocumentWrapper) {
            args[0] = args[0].ref;
        }
        // @ts-ignore
        (_a = this.realWriteBatch).update.apply(_a, args);
        return this;
    };
    WriteBatchWrapper.prototype.delete = function (documentRef) {
        if (documentRef instanceof DocumentWrapper) {
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
export { WriteBatchWrapper };
//# sourceMappingURL=write-batch-wrapper.js.map