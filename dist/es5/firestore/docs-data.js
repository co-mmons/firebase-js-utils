"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsData = void 0;
var tslib_1 = require("tslib");
var docs_snapshots_1 = require("./docs-snapshots");
var union_types_1 = require("./union-types");
function docsData(query, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var data, _i, _a, snapshot;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    data = [];
                    _i = 0;
                    return [4 /*yield*/, (union_types_1.Query.isClient(query) ? docs_snapshots_1.docsSnapshots(query, options) : docs_snapshots_1.docsSnapshots(query))];
                case 1:
                    _a = _b.sent();
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    snapshot = _a[_i];
                    data.push(snapshot.data());
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 2];
                case 4: return [2 /*return*/, data];
            }
        });
    });
}
exports.docsData = docsData;
//# sourceMappingURL=docs-data.js.map