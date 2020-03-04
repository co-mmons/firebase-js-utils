import { __awaiter } from "tslib";
import { extractGetOptions } from "./client/extract-get-options";
import { Query } from "./union-types";
export function docsSnapshots(query, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Query.isClient(query)) {
            return (yield query.get(extractGetOptions(options))).docs;
        }
        else if (Query.isAdmin(query)) {
            return (yield query.get()).docs;
        }
        else {
            throw new Error("Invalid query");
        }
    });
}
//# sourceMappingURL=docs-snapshots.js.map