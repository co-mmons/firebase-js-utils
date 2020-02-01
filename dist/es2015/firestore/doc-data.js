"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client = require("@firebase/firestore-types");
const admin = require("@google-cloud/firestore");
function docData(doc, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
exports.docData = docData;
//# sourceMappingURL=doc-data.js.map