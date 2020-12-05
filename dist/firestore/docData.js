"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docData = void 0;
const tslib_1 = require("tslib");
const extractGetOptions_1 = require("./client/extractGetOptions");
const extractSnapshotOptions_1 = require("./client/extractSnapshotOptions");
const union_types_1 = require("./union-types");
function docData(doc, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let data;
        if (union_types_1.DocumentReference.isClient(doc)) {
            data = (yield doc.get(extractGetOptions_1.extractGetOptions(options))).data(extractSnapshotOptions_1.extractSnapshotOptions(options));
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
//# sourceMappingURL=docData.js.map