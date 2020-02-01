"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = require("rxjs/operators");
const union_types_1 = require("../union-types");
const docs_snapshots_observable_1 = require("./docs-snapshots-observable");
function docsDataObservable(query, options) {
    if (union_types_1.Query.isClient(query)) {
        return docs_snapshots_observable_1.docsSnapshotsObservable(query, options).pipe(operators_1.map(snapshots => snapshots.map(snapshot => snapshot.data(options))));
    }
    else if (union_types_1.Query.isAdmin(query)) {
        return docs_snapshots_observable_1.docsSnapshotsObservable(query).pipe(operators_1.map(snapshots => snapshots.map(snapshot => snapshot.data())));
    }
    else {
        throw new Error("Invalid query");
    }
}
exports.docsDataObservable = docsDataObservable;
//# sourceMappingURL=docs-data-observable.js.map