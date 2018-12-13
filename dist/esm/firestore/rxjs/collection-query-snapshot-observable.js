import { Observable } from "rxjs";
import { UniversalFirestore } from "../firestore";
function collectionOrQuerySnapshotObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.collectionSnapshotObservable(this.collection(collectionPathOrQuery), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
UniversalFirestore.prototype.collectionSnapshotObservable = collectionOrQuerySnapshotObservable;
UniversalFirestore.prototype.querySnapshotObservable = collectionOrQuerySnapshotObservable;
//# sourceMappingURL=collection-query-snapshot-observable.js.map