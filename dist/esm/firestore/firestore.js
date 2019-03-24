var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { sleep } from "@co.mmons/js-utils/core";
import { ArraySerializer, serialize, Serializer, unserialize } from "@co.mmons/js-utils/json";
import { extractGetOptions } from "./extract-get-options";
import { extractSnapshotOptions } from "./extract-snapshot-options";
var UniversalFirestore = /** @class */ (function () {
    function UniversalFirestore() {
    }
    /**
     * Creates new, randomly generated id.s
     */
    UniversalFirestore.prototype.createId = function () {
        return this.collection("_").doc().id;
    };
    UniversalFirestore.prototype.serialize = function (data, options) {
        return serialize(data, options);
    };
    UniversalFirestore.prototype.unserialize = function (json, targetClassOrSerializer, options) {
        if (targetClassOrSerializer instanceof Serializer) {
            return targetClassOrSerializer.unserialize(json);
        }
        return unserialize(json, targetClassOrSerializer, options);
    };
    UniversalFirestore.prototype.docData = function (doc, options) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof doc == "string") {
                            return [2 /*return*/, this.docData(this.doc(doc), options)];
                        }
                        return [4 /*yield*/, doc.get(extractGetOptions(options))];
                    case 1:
                        data = (_a.sent()).data(extractSnapshotOptions(options));
                        if (options && options.serializer) {
                            return [2 /*return*/, this.unserialize(data, options.serializer, options.serializationOptions)];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    UniversalFirestore.prototype.docsData = function (collectionPathOrQuery, options) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _i, _a, d;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = [];
                        _i = 0;
                        return [4 /*yield*/, this.docsSnapshots(collectionPathOrQuery, options)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        d = _a[_i];
                        data.push(d.data(extractSnapshotOptions(options)));
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 2];
                    case 4:
                        if (options && options.serializer) {
                            return [2 /*return*/, this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions)];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    UniversalFirestore.prototype.docsSnapshots = function (collectionPathOrQuery, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof collectionPathOrQuery == "string") {
                            return [2 /*return*/, this.docsSnapshots(this.collection(collectionPathOrQuery), options)];
                        }
                        return [4 /*yield*/, collectionPathOrQuery.get(extractGetOptions(options))];
                    case 1: return [2 /*return*/, (_a.sent()).docs];
                }
            });
        });
    };
    UniversalFirestore.prototype.deleteQuery = function (query, batchSize) {
        return __awaiter(this, void 0, void 0, function () {
            var snapshot, batch, _i, _a, doc, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (batchSize < 1) {
                            batchSize = 400;
                        }
                        return [4 /*yield*/, query.get()];
                    case 1:
                        snapshot = _c.sent();
                        // when there are no documents left, we are done
                        if (snapshot.size == 0) {
                            return [2 /*return*/, 0];
                        }
                        batch = this.batch();
                        for (_i = 0, _a = snapshot.docs; _i < _a.length; _i++) {
                            doc = _a[_i];
                            batch.delete(doc.ref);
                        }
                        return [4 /*yield*/, batch.commit()];
                    case 2:
                        _c.sent();
                        if (snapshot.size <= batchSize) {
                            return [2 /*return*/, snapshot.size];
                        }
                        return [4 /*yield*/, sleep(50)];
                    case 3:
                        _c.sent();
                        _b = snapshot.size;
                        return [4 /*yield*/, this.deleteQuery(query, batchSize)];
                    case 4: return [2 /*return*/, _b + (_c.sent())];
                }
            });
        });
    };
    return UniversalFirestore;
}());
export { UniversalFirestore };
//# sourceMappingURL=firestore.js.map