"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var extract_snapshot_listen_options_1 = require("../extract-snapshot-listen-options");
var firestore_1 = require("../firestore");
function docSnapshotObservable(doc, options) {
    if (typeof doc == "string") {
        return this.docSnapshotObservable(this.doc(doc), options);
    }
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = doc.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options), subscriber);
        return function () { return unsubscribe(); };
    });
}
function docSnapshotObservableInject() {
    firestore_1.UniversalFirestore.prototype.docSnapshotObservable = docSnapshotObservable;
}
exports.docSnapshotObservableInject = docSnapshotObservableInject;
//# sourceMappingURL=doc-snapshot-observable.js.map