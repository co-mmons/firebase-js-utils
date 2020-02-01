import { __awaiter, __generator } from "tslib";
import { sleep } from "@co.mmons/js-utils/core";
import * as admin from "@google-cloud/firestore";
export function deleteQuery(query, options) {
    return __awaiter(this, void 0, void 0, function () {
        var snapshot, deleteCount, _i, _a, d, error_1, docs, part, batch, _b, part_1, doc, i, error_2, _c, _d, doc, _e, _f, collection, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    if (!options) {
                        options = {};
                    }
                    if (options.readLimit) {
                        query = query.limit(options.readLimit);
                    }
                    return [4 /*yield*/, query.get()];
                case 1:
                    snapshot = _j.sent();
                    deleteCount = 0;
                    // when there are no documents left, we are done
                    if (snapshot.size === 0) {
                        return [2 /*return*/, 0];
                    }
                    _i = 0, _a = snapshot.docs;
                    _j.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 7];
                    d = _a[_i];
                    if (!(options.batch === false)) return [3 /*break*/, 6];
                    _j.label = 3;
                case 3:
                    _j.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, d.ref.delete()];
                case 4:
                    _j.sent();
                    deleteCount++;
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _j.sent();
                    console.warn(error_1);
                    return [3 /*break*/, 6];
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7:
                    if (!(options.batch !== false)) return [3 /*break*/, 17];
                    docs = snapshot.docs.slice();
                    _j.label = 8;
                case 8:
                    if (!(docs.length > 0)) return [3 /*break*/, 17];
                    part = docs.splice(0, 499);
                    batch = query.firestore.batch();
                    for (_b = 0, part_1 = part; _b < part_1.length; _b++) {
                        doc = part_1[_b];
                        batch.delete(doc.ref);
                    }
                    i = 1;
                    _j.label = 9;
                case 9:
                    if (!(i <= (options.batchRetryCount > 1 ? options.batchRetryCount : 1))) return [3 /*break*/, 16];
                    _j.label = 10;
                case 10:
                    _j.trys.push([10, 12, , 15]);
                    return [4 /*yield*/, batch.commit()];
                case 11:
                    _j.sent();
                    deleteCount = part.length;
                    return [3 /*break*/, 16];
                case 12:
                    error_2 = _j.sent();
                    console.warn(error_2);
                    if (!(i < (options.batchRetryCount > 1 ? options.batchRetryCount : 1))) return [3 /*break*/, 14];
                    return [4 /*yield*/, sleep(options.batchRetryDelay || (2000 * i))];
                case 13:
                    _j.sent();
                    _j.label = 14;
                case 14: return [3 /*break*/, 15];
                case 15:
                    i++;
                    return [3 /*break*/, 9];
                case 16: return [3 /*break*/, 8];
                case 17:
                    if (!(deleteCount > 0 && options.subcollections !== false && query instanceof admin.Query)) return [3 /*break*/, 24];
                    _c = 0, _d = snapshot.docs;
                    _j.label = 18;
                case 18:
                    if (!(_c < _d.length)) return [3 /*break*/, 24];
                    doc = _d[_c];
                    _e = 0;
                    return [4 /*yield*/, doc.ref.listCollections()];
                case 19:
                    _f = (_j.sent());
                    _j.label = 20;
                case 20:
                    if (!(_e < _f.length)) return [3 /*break*/, 23];
                    collection = _f[_e];
                    return [4 /*yield*/, deleteQuery(collection, options)];
                case 21:
                    _j.sent();
                    _j.label = 22;
                case 22:
                    _e++;
                    return [3 /*break*/, 20];
                case 23:
                    _c++;
                    return [3 /*break*/, 18];
                case 24:
                    _g = deleteCount;
                    if (!(!options.readLimit || (options.readLimit > 0 && deleteCount < options.readLimit))) return [3 /*break*/, 25];
                    _h = 0;
                    return [3 /*break*/, 27];
                case 25: return [4 /*yield*/, deleteQuery(query, options)];
                case 26:
                    _h = _j.sent();
                    _j.label = 27;
                case 27: return [2 /*return*/, _g + (_h)];
            }
        });
    });
}
//# sourceMappingURL=delete-query.js.map