import * as tslib_1 from "tslib";
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, _i, _a, d;
            return tslib_1.__generator(this, function (_b) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var snapshot, batch, _i, _a, doc, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!batchSize || batchSize < 1) {
                            batchSize = 400;
                        }
                        return [4 /*yield*/, query.limit(batchSize).get()];
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