import { __awaiter, __extends, __generator, __spreadArrays } from "tslib";
import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
var WriteBatch = /** @class */ (function () {
    function WriteBatch(firestore) {
        this.firestore = firestore;
        this.limit$ = 499;
        this.count$ = 0;
    }
    Object.defineProperty(WriteBatch.prototype, "batch", {
        get: function () {
            if (!this.batch$) {
                this.batch$ = this.firestore.batch();
            }
            return this.batch$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WriteBatch.prototype, "clientBatch", {
        get: function () {
            return this.batch instanceof client.WriteBatch && this.batch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WriteBatch.prototype, "adminBatch", {
        get: function () {
            return this.batch instanceof admin.WriteBatch && this.batch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WriteBatch.prototype, "count", {
        get: function () {
            return this.count$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WriteBatch.prototype, "limit", {
        get: function () {
            return this.limit$;
        },
        set: function (limit) {
            this.limit$ = limit > 0 && limit <= 499 ? limit : 499;
        },
        enumerable: true,
        configurable: true
    });
    WriteBatch.prototype.isFull = function () {
        return this.count$ >= this.limit$;
    };
    WriteBatch.prototype.autoCommit = function () {
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
                        this.count$ = 0;
                        return [2 /*return*/, { count: count, results: results }];
                    case 2: return [2 /*return*/, { count: 0 }];
                }
            });
        });
    };
    WriteBatch.prototype.commit = function () {
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
                        this.count$ = 0;
                        return [2 /*return*/, { count: count, results: results }];
                    case 2: return [2 /*return*/, { count: 0 }];
                }
            });
        });
    };
    WriteBatch.prototype.delete = function (documentRef) {
        this.count$++;
        this.batch.delete(documentRef);
        return this;
    };
    WriteBatch.prototype.set = function (documentRef, data, options) {
        this.count$++;
        if (documentRef instanceof client.DocumentReference) {
            this.clientBatch.set(documentRef, data, options);
        }
        else if (documentRef instanceof admin.DocumentReference) {
            this.adminBatch.set(documentRef, data, options);
        }
        return this;
    };
    WriteBatch.prototype.update = function (documentRef, dataOrField, value) {
        var _a, _b;
        var moreFieldsAndValues = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            moreFieldsAndValues[_i - 3] = arguments[_i];
        }
        this.count$++;
        if (arguments.length === 2) {
            if (documentRef instanceof client.DocumentReference) {
                this.clientBatch.update(documentRef, dataOrField);
            }
            else if (documentRef instanceof admin.DocumentReference) {
                this.adminBatch.update(documentRef, dataOrField);
            }
        }
        else {
            if (documentRef instanceof client.DocumentReference) {
                (_a = this.clientBatch).update.apply(_a, __spreadArrays([documentRef, dataOrField, value], moreFieldsAndValues));
            }
            else if (documentRef instanceof admin.DocumentReference) {
                (_b = this.adminBatch).update.apply(_b, __spreadArrays([documentRef, dataOrField, value], moreFieldsAndValues));
            }
        }
        return this;
    };
    return WriteBatch;
}());
export { WriteBatch };
var WriteBatchClient = /** @class */ (function (_super) {
    __extends(WriteBatchClient, _super);
    function WriteBatchClient(firestore) {
        return _super.call(this, firestore) || this;
    }
    return WriteBatchClient;
}(WriteBatch));
export { WriteBatchClient };
var WriteBatchAdmin = /** @class */ (function (_super) {
    __extends(WriteBatchAdmin, _super);
    function WriteBatchAdmin(firestore) {
        return _super.call(this, firestore) || this;
    }
    return WriteBatchAdmin;
}(WriteBatch));
export { WriteBatchAdmin };
export function writeBatch(firestore) {
    if (firestore instanceof client.FirebaseFirestore) {
        return new WriteBatchClient(firestore);
    }
    else if (firestore instanceof admin.Firestore) {
        return new WriteBatchAdmin(firestore);
    }
}
//# sourceMappingURL=write-batch.js.map