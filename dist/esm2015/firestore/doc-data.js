import { __awaiter } from "tslib";
import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
export function docData(doc, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        if (doc instanceof client.DocumentReference) {
            data = (yield doc.get(options)).data(options);
        }
        else if (doc instanceof admin.DocumentReference) {
            data = (yield doc.get()).data();
        }
        else {
            throw new Error("Invalid document reference");
        }
        return data;
    });
}
//# sourceMappingURL=doc-data.js.map