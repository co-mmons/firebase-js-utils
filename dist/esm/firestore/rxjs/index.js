import { collectionQuerySnapshotObservableInject } from "./collection-query-snapshot-observable";
import { docDataObservableInject } from "./doc-data-observable";
import { docSnapshotObservableInject } from "./doc-snapshot-observable";
import { docsDataObservableInject } from "./docs-data-observable";
import { docsSnapshotsObservableInject } from "./docs-snapshots-observable";
export * from "../";
import { UniversalFirestore } from "../";
export function injectUniversalFirestoreRxjs() {
    UniversalFirestore;
    collectionQuerySnapshotObservableInject();
    docDataObservableInject();
    docSnapshotObservableInject();
    docsDataObservableInject();
    docsSnapshotsObservableInject();
}
//# sourceMappingURL=index.js.map