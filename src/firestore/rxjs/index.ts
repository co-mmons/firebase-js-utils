import {UniversalFirestore} from "../";
import "./collection-query-snapshot-observable";
import {collectionQuerySnapshotObservableInject} from "./collection-query-snapshot-observable";
import "./doc-data-observable";
import {docDataObservableInject} from "./doc-data-observable";
import "./doc-snapshot-observable";
import {docSnapshotObservableInject} from "./doc-snapshot-observable";
import "./docs-data-observable";
import {docsDataObservableInject} from "./docs-data-observable";
import "./docs-snapshots-observable";
import {docsSnapshotsObservableInject} from "./docs-snapshots-observable";

export * from "../";

export function injectUniversalFirestoreRxjs() {
    UniversalFirestore;

    collectionQuerySnapshotObservableInject();
    docDataObservableInject();
    docSnapshotObservableInject();
    docsDataObservableInject();
    docsSnapshotsObservableInject();
}