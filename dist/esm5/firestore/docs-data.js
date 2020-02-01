import { __awaiter, __generator } from "tslib";
import * as client from "@firebase/firestore-types";
import { docsSnapshots } from "./docs-snapshots";
export function docsData(query, options) {
    return __awaiter(this, void 0, void 0, function () {
        var data, _i, _a, snapshot;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    data = [];
                    _i = 0;
                    return [4 /*yield*/, (query instanceof client.Query ? docsSnapshots(query, options) : docsSnapshots(query))];
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
//# sourceMappingURL=docs-data.js.map