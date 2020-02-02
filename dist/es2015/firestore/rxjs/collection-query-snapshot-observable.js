"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const union_types_1 = require("../union-types");
function querySnapshotObservable(query, options) {
    if (union_types_1.Query.isClient(query)) {
        return new rxjs_1.Observable(subscriber => {
            const unsubscribe = query.onSnapshot(options || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        });
    }
    else if (union_types_1.Query.isAdmin(query)) {
        return new rxjs_1.Observable(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        });
    }
}
exports.querySnapshotObservable = querySnapshotObservable;
function collectionSnapshotObservable(collection, options) {
    if (union_types_1.CollectionReference.isClient(collection)) {
        return querySnapshotObservable(collection, options);
    }
    else if (union_types_1.CollectionReference.isAdmin(collection)) {
        return querySnapshotObservable(collection);
    }
    else {
        throw new Error("Invalid collection");
    }
}
exports.collectionSnapshotObservable = collectionSnapshotObservable;
//# sourceMappingURL=collection-query-snapshot-observable.js.map