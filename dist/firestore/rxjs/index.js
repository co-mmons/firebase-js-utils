"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var collection_query_snapshot_observable_1 = require("./collection-query-snapshot-observable");
var doc_data_observable_1 = require("./doc-data-observable");
var doc_snapshot_observable_1 = require("./doc-snapshot-observable");
var docs_data_observable_1 = require("./docs-data-observable");
var docs_snapshots_observable_1 = require("./docs-snapshots-observable");
__export(require("../"));
var __1 = require("../");
function injectUniversalFirestoreRxjs() {
    __1.UniversalFirestore;
    collection_query_snapshot_observable_1.collectionQuerySnapshotObservableInject();
    doc_data_observable_1.docDataObservableInject();
    doc_snapshot_observable_1.docSnapshotObservableInject();
    docs_data_observable_1.docsDataObservableInject();
    docs_snapshots_observable_1.docsSnapshotsObservableInject();
}
exports.injectUniversalFirestoreRxjs = injectUniversalFirestoreRxjs;
//# sourceMappingURL=index.js.map