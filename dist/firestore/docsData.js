"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsData = void 0;
const tslib_1 = require("tslib");
const docsSnapshots_1 = require("./docsSnapshots");
const union_types_1 = require("./union-types");
function docsData(query, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const data = [];
        for (const snapshot of yield (union_types_1.Query.isClient(query) ? docsSnapshots_1.docsSnapshots(query, options) : docsSnapshots_1.docsSnapshots(query))) {
            data.push(snapshot.data());
        }
        return data;
    });
}
exports.docsData = docsData;
//# sourceMappingURL=docsData.js.map