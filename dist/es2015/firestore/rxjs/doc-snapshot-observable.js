"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const extract_snapshot_listen_options_1 = require("../extract-snapshot-listen-options");
const firestore_1 = require("../firestore");
function docSnapshotObservable(doc, options) {
    if (typeof doc == "string") {
        return this.docSnapshotObservable(this.doc(doc), options);
    }
    return new rxjs_1.Observable(subscriber => {
        let unsubscribe = doc.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options), subscriber);
        return () => unsubscribe();
    });
}
function docSnapshotObservableInject() {
    firestore_1.UniversalFirestore.prototype.docSnapshotObservable = docSnapshotObservable;
}
exports.docSnapshotObservableInject = docSnapshotObservableInject;
//# sourceMappingURL=doc-snapshot-observable.js.map