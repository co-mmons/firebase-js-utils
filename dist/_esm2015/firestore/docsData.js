import { __awaiter } from "tslib";
import { docsSnapshots } from "./docsSnapshots";
import { Query } from "./union-types";
export function docsData(query, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = [];
        for (const snapshot of yield (Query.isClient(query) ? docsSnapshots(query, options) : docsSnapshots(query))) {
            data.push(snapshot.data());
        }
        return data;
    });
}
//# sourceMappingURL=docsData.js.map