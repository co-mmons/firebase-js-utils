import { __awaiter, __generator } from "tslib";
import { DocumentReference } from "./union-types";
export function docData(doc, options) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!DocumentReference.isClient(doc)) return [3 /*break*/, 2];
                    return [4 /*yield*/, doc.get(options)];
                case 1:
                    data = (_a.sent()).data(options);
                    return [3 /*break*/, 5];
                case 2:
                    if (!DocumentReference.isAdmin(doc)) return [3 /*break*/, 4];
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
//# sourceMappingURL=doc-data.js.map