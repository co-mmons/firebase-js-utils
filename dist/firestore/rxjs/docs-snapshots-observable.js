"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var extract_snapshot_listen_options_1 = require("../extract-snapshot-listen-options");
var firestore_1 = require("../firestore");
function docsSnapshotsObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.docsSnapshotsObservable(this.collection(collectionPathOrQuery), options);
    }
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options), subscriber);
        return function () { return unsubscribe(); };
    }).pipe(operators_1.map(function (snapshot) { return snapshot.docs; }));
}
function docsSnapshotsObservableInject() {
    firestore_1.UniversalFirestore.prototype.docsSnapshotsObservable = docsSnapshotsObservable;
}
exports.docsSnapshotsObservableInject = docsSnapshotsObservableInject;
//# sourceMappingURL=docs-snapshots-observable.js.map