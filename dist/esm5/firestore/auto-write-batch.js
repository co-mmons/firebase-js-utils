import { __awaiter, __extends, __generator, __spreadArrays } from "tslib";
import { DocumentReference, Firestore, WriteBatch } from "./union-types";
var AutoWriteBatch = /** @class */ (function () {
    function AutoWriteBatch(firestore) {
        this.firestore = firestore;
        this.limit$ = 249;
        this.count$ = 0;
    }
    Object.defineProperty(AutoWriteBatch.prototype, "batch", {
        get: function () {
            if (!this.batch$) {
                this.batch$ = this.firestore.batch();
            }
            return this.batch$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoWriteBatch.prototype, "count", {
        get: function () {
            return this.count$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoWriteBatch.prototype, "limit", {
        get: function () {
            return this.limit$;
        },
        set: function (limit) {
            this.limit$ = limit > 0 && limit <= 249 ? limit : 249;
        },
        enumerable: true,
        configurable: true
    });
    AutoWriteBatch.prototype.isFull = function () {
        return this.count$ >= this.limit$;
    };
    AutoWriteBatch.prototype.autoCommit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.count$ > this.limit$)) return [3 /*break*/, 2];
                        count = this.count$;
                        return [4 /*yield*/, this.batch.commit()];
                    case 1:
                        results = _a.sent();
                        this.batch$ = undefined;
                        this.count$ = 0;
                        if (this.onCommit) {
                            try {
                                this.onCommit(count, results);
                            }
                            catch (e) {
                                console.error(e);
                            }
                        }
                        return [2 /*return*/, { count: count, results: results }];
                    case 2: return [2 /*return*/, { count: 0 }];
                }
            });
        });
    };
    AutoWriteBatch.prototype.commit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.count$ > 0)) return [3 /*break*/, 2];
                        count = this.count$;
                        return [4 /*yield*/, this.batch.commit()];
                    case 1:
                        results = _a.sent();
                        this.batch$ = undefined;
                        this.count$ = 0;
                        if (this.onCommit) {
                            try {
                                this.onCommit(count, results);
                            }
                            catch (e) {
                                console.error(e);
                            }
                        }
                        return [2 /*return*/, { count: count, results: results }];
                    case 2: return [2 /*return*/, { count: 0 }];
                }
            });
        });
    };
    AutoWriteBatch.prototype.delete = function (documentRef) {
        this.count$++;
        this.batch.delete(documentRef);
        return this;
    };
    AutoWriteBatch.prototype.set = function (documentRef, data, options) {
        this.count$++;
        if (DocumentReference.isClient(documentRef) && WriteBatch.isClient(this.batch)) {
            this.batch.set(documentRef, data, options);
        }
        else if (DocumentReference.isAdmin(documentRef) && WriteBatch.isAdmin(this.batch)) {
            this.batch.set(documentRef, data, options);
        }
        return this;
    };
    AutoWriteBatch.prototype.update = function (documentRef, dataOrField, value) {
        var _a, _b;
        var moreFieldsAndValues = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            moreFieldsAndValues[_i - 3] = arguments[_i];
        }
        this.count$++;
        if (arguments.length === 2) {
            if (DocumentReference.isClient(documentRef) && WriteBatch.isClient(this.batch)) {
                this.batch.update(documentRef, dataOrField);
            }
            else if (DocumentReference.isAdmin(documentRef) && WriteBatch.isAdmin(this.batch)) {
                this.batch.update(documentRef, dataOrField);
            }
        }
        else {
            if (DocumentReference.isClient(documentRef) && WriteBatch.isClient(this.batch)) {
                (_a = this.batch).update.apply(_a, __spreadArrays([documentRef, dataOrField, value], moreFieldsAndValues));
            }
            else if (DocumentReference.isAdmin(documentRef) && WriteBatch.isAdmin(this.batch)) {
                (_b = this.batch).update.apply(_b, __spreadArrays([documentRef, dataOrField, value], moreFieldsAndValues));
            }
        }
        return this;
    };
    return AutoWriteBatch;
}());
export { AutoWriteBatch };
var AutoWriteBatchClient = /** @class */ (function (_super) {
    __extends(AutoWriteBatchClient, _super);
    function AutoWriteBatchClient(firestore) {
        return _super.call(this, firestore) || this;
    }
    return AutoWriteBatchClient;
}(AutoWriteBatch));
export { AutoWriteBatchClient };
var AutoWriteBatchAdmin = /** @class */ (function (_super) {
    __extends(AutoWriteBatchAdmin, _super);
    function AutoWriteBatchAdmin(firestore) {
        return _super.call(this, firestore) || this;
    }
    Object.defineProperty(AutoWriteBatchAdmin.prototype, "adminBatch", {
        get: function () {
            return this.batch;
        },
        enumerable: true,
        configurable: true
    });
    AutoWriteBatchAdmin.prototype.create = function (documentRef, data) {
        this.count$++;
        this.adminBatch.create(documentRef, data);
        return this;
    };
    return AutoWriteBatchAdmin;
}(AutoWriteBatch));
export { AutoWriteBatchAdmin };
export function autoWriteBatch(firestore) {
    if (Firestore.isClient(firestore)) {
        return new AutoWriteBatchClient(firestore);
    }
    else if (Firestore.isAdmin(firestore)) {
        return new AutoWriteBatchAdmin(firestore);
    }
}
//# sourceMappingURL=auto-write-batch.js.map