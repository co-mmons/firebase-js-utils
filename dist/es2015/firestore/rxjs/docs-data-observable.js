"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client = require("@firebase/firestore-types");
const admin = require("@google-cloud/firestore");
const operators_1 = require("rxjs/operators");
const docs_snapshots_observable_1 = require("./docs-snapshots-observable");
function docsDataObservable(query, options) {
    if (query instanceof client.Query) {
        return docs_snapshots_observable_1.docsSnapshotsObservable(query, options).pipe(operators_1.map(snapshots => snapshots.map(snapshot => snapshot.data(options))));
    }
    else if (query instanceof admin.Query) {
        return docs_snapshots_observable_1.docsSnapshotsObservable(query).pipe(operators_1.map(snapshots => snapshots.map(snapshot => snapshot.data())));
    }
    else {
        throw new Error("Invalid query");
    }
}
exports.docsDataObservable = docsDataObservable;
//# sourceMappingURL=docs-data-observable.js.map