"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docSnapshotObservable = void 0;
const rxjs_1 = require("rxjs");
const extract_snapshot_listen_options_1 = require("../client/extract-snapshot-listen-options");
const union_types_1 = require("../union-types");
function docSnapshotObservable(doc, options) {
    return new rxjs_1.Observable(subscriber => {
        if (union_types_1.DocumentReference.isClient(doc)) {
            const unsubscribe = doc.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options) || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }
        else if (union_types_1.DocumentReference.isAdmin(doc)) {
            const unsubscribe = doc.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }
    });
}
exports.docSnapshotObservable = docSnapshotObservable;
//# sourceMappingURL=doc-snapshot-observable.js.map