"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var extract_snapshot_listen_options_1 = require("../extract-snapshot-listen-options");
var firestore_1 = require("../firestore");
function collectionOrQuerySnapshotObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.collectionSnapshotObservable(this.collection(collectionPathOrQuery), options);
    }
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options), subscriber);
        return function () { return unsubscribe(); };
    });
}
function collectionQuerySnapshotObservableInject() {
    firestore_1.UniversalFirestore.prototype.collectionSnapshotObservable = collectionOrQuerySnapshotObservable;
    firestore_1.UniversalFirestore.prototype.querySnapshotObservable = collectionOrQuerySnapshotObservable;
}
exports.collectionQuerySnapshotObservableInject = collectionQuerySnapshotObservableInject;
//# sourceMappingURL=collection-query-snapshot-observable.js.map