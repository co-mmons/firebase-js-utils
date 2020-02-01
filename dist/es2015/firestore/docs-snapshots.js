"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const union_types_1 = require("./union-types");
function docsSnapshots(query, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (union_types_1.Query.isClient(query)) {
            return (yield query.get(options)).docs;
        }
        else if (union_types_1.Query.isAdmin(query)) {
            return (yield query.get()).docs;
        }
        else {
            throw new Error("Invalid query");
        }
    });
}
exports.docsSnapshots = docsSnapshots;
//# sourceMappingURL=docs-snapshots.js.map