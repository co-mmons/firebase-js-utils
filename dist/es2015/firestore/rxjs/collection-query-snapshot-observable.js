"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client = require("@firebase/firestore-types");
const admin = require("@google-cloud/firestore");
const rxjs_1 = require("rxjs");
function querySnapshotObservable(query) {
    return new rxjs_1.Observable(subscriber => {
        const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
        return () => unsubscribe();
    });
}
exports.querySnapshotObservable = querySnapshotObservable;
function collectionSnapshotObservable(collection) {
    if (collection instanceof client.CollectionReference) {
        return querySnapshotObservable(collection);
    }
    else if (collection instanceof admin.CollectionReference) {
        return querySnapshotObservable(collection);
    }
    else {
        throw new Error("Invalid collection");
    }
}
exports.collectionSnapshotObservable = collectionSnapshotObservable;
//# sourceMappingURL=collection-query-snapshot-observable.js.map