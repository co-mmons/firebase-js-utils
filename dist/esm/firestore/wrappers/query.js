var QueryWrapper = /** @class */ (function () {
    function QueryWrapper(firestore, query) {
        this.firestore = firestore;
        this.query = query;
    }
    QueryWrapper.prototype.where = function (fieldPath, opStr, value) {
        return new QueryWrapper(this.firestore, this.query.where(fieldPath, opStr, value));
    };
    QueryWrapper.prototype.orderBy = function (fieldPath, directionStr) {
        return new QueryWrapper(this.firestore, this.query.orderBy(fieldPath, directionStr));
    };
    QueryWrapper.prototype.get = function (options) {
        return this.query.get(options);
    };
    QueryWrapper.prototype.limit = function (limit) {
        return new QueryWrapper(this.firestore, this.query.limit(limit));
    };
    QueryWrapper.prototype.startAt = function (snapshot) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return new QueryWrapper(this.firestore, this.query.startAt(snapshot, rest));
    };
    QueryWrapper.prototype.startAfter = function (snapshot) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return new QueryWrapper(this.firestore, this.query.startAfter(snapshot, rest));
    };
    QueryWrapper.prototype.endBefore = function (snapshot) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return new QueryWrapper(this.firestore, this.query.endBefore(snapshot, rest));
    };
    QueryWrapper.prototype.endAt = function (snapshot) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return new QueryWrapper(this.firestore, this.query.endAt(snapshot, rest));
    };
    QueryWrapper.prototype.isEqual = function (other) {
        return this.query.isEqual(other);
    };
    QueryWrapper.prototype.onSnapshot = function (options, onNext, onError, onCompletion) {
        return this.query.onSnapshot(options, onNext, onError, onCompletion);
    };
    return QueryWrapper;
}());
export { QueryWrapper };
//# sourceMappingURL=query.js.map