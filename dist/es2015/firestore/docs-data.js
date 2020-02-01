"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client = require("@firebase/firestore-types");
const docs_snapshots_1 = require("./docs-snapshots");
function docsData(query, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const data = [];
        for (const snapshot of yield (query instanceof client.Query ? docs_snapshots_1.docsSnapshots(query, options) : docs_snapshots_1.docsSnapshots(query))) {
            data.push(snapshot.data());
        }
        return data;
    });
}
exports.docsData = docsData;
//# sourceMappingURL=docs-data.js.map