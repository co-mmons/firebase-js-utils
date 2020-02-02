import { Observable } from "rxjs";
import { CollectionReference, Query } from "../union-types";
export function querySnapshotObservable(query, options) {
    if (Query.isClient(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(options || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        });
    }
    else if (Query.isAdmin(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
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