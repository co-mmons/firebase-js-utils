"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const extract_snapshot_listen_options_1 = require("../extract-snapshot-listen-options");
const firestore_1 = require("../firestore");
function docsSnapshotsObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.docsSnapshotsObservable(this.collection(collectionPathOrQuery), options);
    }
    return new rxjs_1.Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options), subscriber);
        return () => unsubscribe();
    }).pipe(operators_1.map((snapshot) => snapshot.docs));
}
function docsSnapshotsObservableInject() {
    firestore_1.UniversalFirestore.prototype.docsSnapshotsObservable = docsSnapshotsObservable;
}
exports.docsSnapshotsObservableInject = docsSnapshotsObservableInject;
//# sourceMappingURL=docs-snapshots-observable.js.map