"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client = require("@firebase/firestore-types");
const admin = require("@google-cloud/firestore");
const operators_1 = require("rxjs/operators");
const doc_snapshot_observable_1 = require("./doc-snapshot-observable");
function docDataObservable(doc, options) {
    if (doc instanceof client.DocumentReference) {
        return doc_snapshot_observable_1.docSnapshotObservable(doc, options).pipe(operators_1.map(snapshot => snapshot.data()));
    }
    else if (doc instanceof admin.DocumentReference) {
        return doc_snapshot_observable_1.docSnapshotObservable(doc).pipe(operators_1.map(snapshot => snapshot.data()));
    }
    else {
        throw new Error("Invalid document reference");
    }
}
exports.docDataObservable = docDataObservable;
//# sourceMappingURL=doc-data-observable.js.map