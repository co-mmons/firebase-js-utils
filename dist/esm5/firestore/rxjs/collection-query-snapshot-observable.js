import { Observable } from "rxjs";
import { CollectionReference, Query } from "../union-types";
export function querySnapshotObservable(query, options) {
    if (Query.isClient(query)) {
        return new Observable(function (subscriber) {
            var unsubscribe = query.onSnapshot(options, function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe(); };
        });
    }
    else if (Query.isAdmin(query)) {
        return new Observable(function (subscriber) {
            var unsubscribe = query.onSnapshot(function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe(); };
        });
    }
}
export function collectionSnapshotObservable(collection, options) {
    if (CollectionReference.isClient(collection)) {
        return querySnapshotObservable(collection, options);
    }
    else if (CollectionReference.isAdmin(collection)) {
        return querySnapshotObservable(collection);
    }
    else {
        throw new Error("Invalid collection");
    }
}
//# sourceMappingURL=collection-query-snapshot-observable.js.map