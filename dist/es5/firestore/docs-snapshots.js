"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsSnapshots = void 0;
var tslib_1 = require("tslib");
var extract_get_options_1 = require("./client/extract-get-options");
var union_types_1 = require("./union-types");
function docsSnapshots(query, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!union_types_1.Query.isClient(query)) return [3 /*break*/, 2];
                    return [4 /*yield*/, query.get(extract_get_options_1.extractGetOptions(options))];
                case 1: return [2 /*return*/, (_a.sent()).docs];
                case 2:
                    if (!union_types_1.Query.isAdmin(query)) return [3 /*break*/, 4];
                    return [4 /*yield*/, query.get()];
                case 3: return [2 /*return*/, (_a.sent()).docs];
                case 4: throw new Error("Invalid query");
            }
        });
    });
}
exports.docsSnapshots = docsSnapshots;
//# sourceMappingURL=docs-snapshots.js.map