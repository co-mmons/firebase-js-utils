"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client = require("@firebase/firestore-types");
const admin = require("@google-cloud/firestore");
const rxjs_1 = require("rxjs");
function docSnapshotObservable(doc, options) {
    return new rxjs_1.Observable(subscriber => {
        if (doc instanceof client.DocumentReference) {
            const unsubscribe = doc.onSnapshot(options, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }
        else if (doc instanceof admin.DocumentReference) {
            const unsubscribe = doc.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }
    });
}
exports.docSnapshotObservable = docSnapshotObservable;
//# sourceMappingURL=doc-snapshot-observable.js.map