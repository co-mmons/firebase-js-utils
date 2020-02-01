import { __awaiter } from "tslib";
import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
export function docsSnapshots(query, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (query instanceof client.Query) {
            return (yield query.get(options)).docs;
        }
        else if (query instanceof admin.Query) {
            return (yield query.get()).docs;
        }
        else {
            throw new Error("Invalid query");
        }
    });
}
//# sourceMappingURL=docs-snapshots.js.map