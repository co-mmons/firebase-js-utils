import { Observable } from "rxjs";
import { extractSnapshotListenOptions } from "../extract-snapshot-listen-options";
import { UniversalFirestore } from "../firestore";
function collectionOrQuerySnapshotObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.querySnapshotObservable(this.collection(collectionPathOrQuery), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(extractSnapshotListenOptions(options) || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
export function collectionQuerySnapshotObservableInject() {
    UniversalFirestore.prototype.collectionSnapshotObservable = collectionOrQuerySnapshotObservable;
    UniversalFirestore.prototype.querySnapshotObservable = collectionOrQuerySnapshotObservable;
}
//# sourceMappingURL=collection-query-snapshot-observable.js.map