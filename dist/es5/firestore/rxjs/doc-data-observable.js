"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docDataObservable = void 0;
var operators_1 = require("rxjs/operators");
var union_types_1 = require("../union-types");
var doc_snapshot_observable_1 = require("./doc-snapshot-observable");
function docDataObservable(doc, options) {
    if (union_types_1.DocumentReference.isClient(doc)) {
        return doc_snapshot_observable_1.docSnapshotObservable(doc, options).pipe(operators_1.map(function (snapshot) { return snapshot.data(); }));
    }
    else if (union_types_1.DocumentReference.isAdmin(doc)) {
        return doc_snapshot_observable_1.docSnapshotObservable(doc).pipe(operators_1.map(function (snapshot) { return snapshot.data(); }));
    }
    else {
        throw new Error("Invalid document reference");
    }
}
exports.docDataObservable = docDataObservable;
//# sourceMappingURL=doc-data-observable.js.map