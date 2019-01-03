"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DocumentWrapper = /** @class */ (function () {
    function DocumentWrapper(fakeFirestore, ref) {
        this.fakeFirestore = fakeFirestore;
        this.ref = ref;
    }
    Object.defineProperty(DocumentWrapper.prototype, "firestore", {
        get: function () {
            return this.ref.firestore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentWrapper.prototype, "id", {
        get: function () {
            return this.ref.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentWrapper.prototype, "parent", {
        get: function () {
            return this.ref.parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentWrapper.prototype, "path", {
        get: function () {
            return this.ref.path;
        },
        enumerable: true,
        configurable: true
    });
    DocumentWrapper.prototype.collection = function (collectionPath) {
        return this.ref.collection(collectionPath);
    };
    DocumentWrapper.prototype.isEqual = function (other) {
        return this.ref.isEqual(other);
    };
    DocumentWrapper.prototype.set = function (data, options) {
        return this.ref.set(data, options);
    };
    DocumentWrapper.prototype.update = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        return this.ref.update(data);
    };
    DocumentWrapper.prototype.delete = function () {
        return this.ref.delete();
    };
    DocumentWrapper.prototype.get = function (options) {
        return this.ref.get(options);
    };
    DocumentWrapper.prototype.onSnapshot = function (options, onNext, onError, onCompletion) {
        return this.ref.onSnapshot(options, onNext, onError, onCompletion);
    };
    return DocumentWrapper;
}());
exports.DocumentWrapper = DocumentWrapper;
//# sourceMappingURL=document-wrapper.js.map