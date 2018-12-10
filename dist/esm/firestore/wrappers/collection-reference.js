var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { QueryWrapper } from "./query";
var CollectionReferenceWrapper = /** @class */ (function (_super) {
    __extends(CollectionReferenceWrapper, _super);
    function CollectionReferenceWrapper(firestore, ref) {
        var _this = _super.call(this, firestore, ref) || this;
        _this.firestore = firestore;
        _this.ref = ref;
        return _this;
    }
    Object.defineProperty(CollectionReferenceWrapper.prototype, "id", {
        get: function () {
            return this.ref.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionReferenceWrapper.prototype, "parent", {
        get: function () {
            return this.ref.parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionReferenceWrapper.prototype, "path", {
        get: function () {
            return this.ref.path;
        },
        enumerable: true,
        configurable: true
    });
    CollectionReferenceWrapper.prototype.doc = function (documentPath) {
        return this.ref.doc(documentPath);
    };
    CollectionReferenceWrapper.prototype.add = function (data) {
        return this.ref.add(data);
    };
    return CollectionReferenceWrapper;
}(QueryWrapper));
export { CollectionReferenceWrapper };
//# sourceMappingURL=collection-reference.js.map