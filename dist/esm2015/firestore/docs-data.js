import { __awaiter } from "tslib";
import * as client from "@firebase/firestore-types";
import { docsSnapshots } from "./docs-snapshots";
export function docsData(query, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = [];
        for (const snapshot of yield (query instanceof client.Query ? docsSnapshots(query, options) : docsSnapshots(query))) {
            data.push(snapshot.data());
        }
        return data;
    });
}
//# sourceMappingURL=docs-data.js.map