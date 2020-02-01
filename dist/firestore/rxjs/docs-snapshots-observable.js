"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const client = require("@firebase/firestore-types");
const admin = require("@google-cloud/firestore");
function docsSnapshotsObservable(query, options) {
    if (query instanceof client.Query) {
        return new rxjs_1.Observable(subscriber => {
            const unsubscribe = query.onSnapshot(options, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(operators_1.map(snapshot => snapshot.docs));
    }
    else if (query instanceof admin.Query) {
        return new rxjs_1.Observable(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(operators_1.map(snapshot => snapshot.docs));
    }
    else {
        throw new Error("Invalid query");
    }
}
exports.docsSnapshotsObservable = docsSnapshotsObservable;
//# sourceMappingURL=docs-snapshots-observable.js.map