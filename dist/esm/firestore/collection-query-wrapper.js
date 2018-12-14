var CollectionOrQueryWrapper = /** @class */ (function () {
    function CollectionOrQueryWrapper(fakeFirestore, ref, query) {
        this.fakeFirestore = fakeFirestore;
        this.ref = ref;
        this.query = query;
    }
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
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).where(fieldPath, opStr, value));
    };
    CollectionOrQueryWrapper.prototype.orderBy = function (fieldPath, directionStr) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).orderBy(fieldPath, directionStr));
    };
    CollectionOrQueryWrapper.prototype.get = function (options) {
        return (this.query || this.ref).get(options);
    };
    CollectionOrQueryWrapper.prototype.limit = function (limit) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).limit(limit));
    };
    CollectionOrQueryWrapper.prototype.startAt = function (snapshot) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).startAt(snapshot, rest));
    };
    CollectionOrQueryWrapper.prototype.startAfter = function (snapshot) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).startAfter(snapshot, rest));
    };
    CollectionOrQueryWrapper.prototype.endBefore = function (snapshot) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).endBefore(snapshot, rest));
    };
    CollectionOrQueryWrapper.prototype.endAt = function (snapshot) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).endAt(snapshot, rest));
    };
    CollectionOrQueryWrapper.prototype.isEqual = function (other) {
        return (this.query || this.ref).isEqual(other);
    };
    CollectionOrQueryWrapper.prototype.onSnapshot = function (options, onNext, onError, onCompletion) {
        return (this.query || this.ref).onSnapshot(options, onNext, onError, onCompletion);
    };
    return CollectionOrQueryWrapper;
}());
export { CollectionOrQueryWrapper };
//# sourceMappingURL=collection-query-wrapper.js.map