"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsSnapshots = void 0;
const tslib_1 = require("tslib");
const extractGetOptions_1 = require("./client/extractGetOptions");
const union_types_1 = require("./union-types");
function docsSnapshots(query, options) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        if (union_types_1.Query.isClient(query)) {
            return (yield query.get((0, extractGetOptions_1.extractGetOptions)(options))).docs;
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
//# sourceMappingURL=docsSnapshots.js.map