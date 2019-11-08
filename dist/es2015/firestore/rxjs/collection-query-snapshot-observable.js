"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const extract_snapshot_listen_options_1 = require("../extract-snapshot-listen-options");
const firestore_1 = require("../firestore");
function collectionOrQuerySnapshotObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.querySnapshotObservable(this.collection(collectionPathOrQuery), options);
    }
    return new rxjs_1.Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options) || {}, subscriber);
        return () => unsubscribe();
    });
}
function collectionQuerySnapshotObservableInject() {
    firestore_1.UniversalFirestore.prototype.collectionSnapshotObservable = collectionOrQuerySnapshotObservable;
    firestore_1.UniversalFirestore.prototype.querySnapshotObservable = collectionOrQuerySnapshotObservable;
}
exports.collectionQuerySnapshotObservableInject = collectionQuerySnapshotObservableInject;
//# sourceMappingURL=collection-query-snapshot-observable.js.map