import { __awaiter, __generator } from "tslib";
import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
export function docsSnapshots(query, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(query instanceof client.Query)) return [3 /*break*/, 2];
                    return [4 /*yield*/, query.get(options)];
                case 1: return [2 /*return*/, (_a.sent()).docs];
                case 2:
                    if (!(query instanceof admin.Query)) return [3 /*break*/, 4];
                    return [4 /*yield*/, query.get()];
                case 3: return [2 /*return*/, (_a.sent()).docs];
                case 4: throw new Error("Invalid query");
            }
        });
    });
}
//# sourceMappingURL=docs-snapshots.js.map