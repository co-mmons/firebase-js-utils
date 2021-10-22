"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsDataObservable = void 0;
const operators_1 = require("rxjs/operators");
const union_types_1 = require("../union-types");
const docsSnapshotsObservable_1 = require("./docsSnapshotsObservable");
function docsDataObservable(query, options) {
    if (union_types_1.Query.isClient(query)) {
        return (0, docsSnapshotsObservable_1.docsSnapshotsObservable)(query, options).pipe((0, operators_1.map)(snapshots => snapshots.map(snapshot => snapshot.data(options))));
    }
    else if (union_types_1.Query.isAdmin(query)) {
        return (0, docsSnapshotsObservable_1.docsSnapshotsObservable)(query).pipe((0, operators_1.map)(snapshots => snapshots.map(snapshot => snapshot.data())));
    }
    else {
        throw new Error("Invalid query");
    }
}
exports.docsDataObservable = docsDataObservable;
//# sourceMappingURL=docsDataObservable.js.map