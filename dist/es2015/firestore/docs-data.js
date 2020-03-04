"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const docs_snapshots_1 = require("./docs-snapshots");
const union_types_1 = require("./union-types");
function docsData(query, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const data = [];
        for (const snapshot of yield (union_types_1.Query.isClient(query) ? docs_snapshots_1.docsSnapshots(query, options) : docs_snapshots_1.docsSnapshots(query))) {
            data.push(snapshot.data());
        }
        return data;
    });
}
exports.docsData = docsData;
//# sourceMappingURL=docs-data.js.map