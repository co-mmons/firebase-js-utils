"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client = require("@firebase/firestore-types");
const admin = require("@google-cloud/firestore");
function docsSnapshots(query, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
exports.docsSnapshots = docsSnapshots;
//# sourceMappingURL=docs-snapshots.js.map