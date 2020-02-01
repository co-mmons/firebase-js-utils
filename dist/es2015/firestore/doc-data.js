"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const union_types_1 = require("./union-types");
function docData(doc, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let data;
        if (union_types_1.DocumentReference.isClient(doc)) {
            data = (yield doc.get(options)).data(options);
        }
        else if (union_types_1.DocumentReference.isAdmin(doc)) {
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