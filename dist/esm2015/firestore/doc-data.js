import { __awaiter } from "tslib";
import { extractGetOptions } from "./client/extract-get-options";
import { extractSnapshotOptions } from "./client/extract-snapshot-options";
import { DocumentReference } from "./union-types";
export function docData(doc, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        if (DocumentReference.isClient(doc)) {
            data = (yield doc.get(extractGetOptions(options))).data(extractSnapshotOptions(options));
        }
        else if (DocumentReference.isAdmin(doc)) {
            data = (yield doc.get()).data();
        }
        else {
            throw new Error("Invalid document reference");
        }
        return data;
    });
}
//# sourceMappingURL=doc-data.js.map