"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const __1 = require("../");
require("./collection-query-snapshot-observable");
const collection_query_snapshot_observable_1 = require("./collection-query-snapshot-observable");
require("./doc-data-observable");
const doc_data_observable_1 = require("./doc-data-observable");
require("./doc-snapshot-observable");
const doc_snapshot_observable_1 = require("./doc-snapshot-observable");
require("./docs-data-observable");
const docs_data_observable_1 = require("./docs-data-observable");
require("./docs-snapshots-observable");
const docs_snapshots_observable_1 = require("./docs-snapshots-observable");
tslib_1.__exportStar(require("../"), exports);
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