"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CollectionOrQueryWrapper = /** @class */ (function () {
    function CollectionOrQueryWrapper(fakeFirestore, ref, query) {
        this.fakeFirestore = fakeFirestore;
        this.ref = ref;
        this.query = query;
    }
    CollectionOrQueryWrapper.prototype.mutate = function (query) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, query);
    };
    Object.defineProperty(CollectionOrQueryWrapper.prototype, "firestore", {
        get: function () {
            return this.ref.firestore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionOrQueryWrapper.prototype, "id", {
        get: function () {
            return this.ref.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionOrQueryWrapper.prototype, "parent", {
        get: function () {
            return this.ref.parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionOrQueryWrapper.prototype, "path", {
        get: function () {
            return this.ref.path;
        },
        enumerable: true,
        configurable: true
    });
    CollectionOrQueryWrapper.prototype.doc = function (documentPath) {
        return this.ref.doc(documentPath);
    };
    CollectionOrQueryWrapper.prototype.add = function (data) {
        return this.ref.add(data);
    };
    CollectionOrQueryWrapper.prototype.where = function (fieldPath, opStr, value) {
        return this.mutate((this.query || this.ref).where(fieldPath, opStr, value));
    };
    CollectionOrQueryWrapper.prototype.orderBy = function (fieldPath, directionStr) {
        return this.mutate((this.query || this.ref).orderBy(fieldPath, directionStr));
    };
    CollectionOrQueryWrapper.prototype.get = function (options) {
        return (this.query || this.ref).get(options);
    };
    CollectionOrQueryWrapper.prototype.limit = function (limit) {
        return this.mutate((this.query || this.ref).limit(limit));
    };
    CollectionOrQueryWrapper.prototype.startAt = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        return this.mutate((_a = (this.query || this.ref)).startAt.apply(_a, args));
    };
    CollectionOrQueryWrapper.prototype.startAfter = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        return this.mutate((_a = (this.query || this.ref)).startAfter.apply(_a, args));
    };
    CollectionOrQueryWrapper.prototype.endBefore = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        return this.mutate((_a = (this.query || this.ref)).endBefore.apply(_a, args));
    };
    CollectionOrQueryWrapper.prototype.endAt = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        return this.mutate((_a = (this.query || this.ref)).endAt.apply(_a, args));
    };
    CollectionOrQueryWrapper.prototype.isEqual = function (other) {
        return (this.query || this.ref).isEqual(other);
    };
    CollectionOrQueryWrapper.prototype.onSnapshot = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        // @ts-ignore
        return (_a = (this.query || this.ref)).onSnapshot.apply(_a, args);
    };
    return CollectionOrQueryWrapper;
}());
exports.CollectionOrQueryWrapper = CollectionOrQueryWrapper;
//# sourceMappingURL=collection-query-wrapper.js.map