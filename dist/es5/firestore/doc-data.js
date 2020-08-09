"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docData = void 0;
var tslib_1 = require("tslib");
var extract_get_options_1 = require("./client/extract-get-options");
var extract_snapshot_options_1 = require("./client/extract-snapshot-options");
var union_types_1 = require("./union-types");
function docData(doc, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!union_types_1.DocumentReference.isClient(doc)) return [3 /*break*/, 2];
                    return [4 /*yield*/, doc.get(extract_get_options_1.extractGetOptions(options))];
                case 1:
                    data = (_a.sent()).data(extract_snapshot_options_1.extractSnapshotOptions(options));
                    return [3 /*break*/, 5];
                case 2:
                    if (!union_types_1.DocumentReference.isAdmin(doc)) return [3 /*break*/, 4];
                    return [4 /*yield*/, doc.get()];
                case 3:
                    data = (_a.sent()).data();
                    return [3 /*break*/, 5];
                case 4: throw new Error("Invalid document reference");
                case 5: return [2 /*return*/, data];
            }
        });
    });
}
exports.docData = docData;
//# sourceMappingURL=doc-data.js.map