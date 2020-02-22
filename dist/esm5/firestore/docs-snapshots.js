import { __awaiter, __generator } from "tslib";
import { extractGetOptions } from "./client/extract-get-options";
import { Query } from "./union-types";
export function docsSnapshots(query, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Query.isClient(query)) return [3 /*break*/, 2];
                    return [4 /*yield*/, query.get(extractGetOptions(options))];
                case 1: return [2 /*return*/, (_a.sent()).docs];
                case 2:
                    if (!Query.isAdmin(query)) return [3 /*break*/, 4];
                    return [4 /*yield*/, query.get()];
                case 3: return [2 /*return*/, (_a.sent()).docs];
                case 4: throw new Error("Invalid query");
            }
        });
    });
}
//# sourceMappingURL=docs-snapshots.js.map