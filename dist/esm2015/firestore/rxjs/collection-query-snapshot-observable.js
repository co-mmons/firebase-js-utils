import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { Observable } from "rxjs";
export function querySnapshotObservable(query) {
    return new Observable(subscriber => {
        const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
        return () => unsubscribe();
    });
}
export function collectionSnapshotObservable(collection) {
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
//# sourceMappingURL=collection-query-snapshot-observable.js.map