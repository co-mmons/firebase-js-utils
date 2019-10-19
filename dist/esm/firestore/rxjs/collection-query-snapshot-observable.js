import { Observable } from "rxjs";
import { extractSnapshotListenOptions } from "../extract-snapshot-listen-options";
import { UniversalFirestore } from "../firestore";
function collectionOrQuerySnapshotObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.querySnapshotObservable(this.collection(collectionPathOrQuery), options);
    }
    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(extractSnapshotListenOptions(options) || {}, subscriber);
        return () => unsubscribe();
    });
}
export function collectionQuerySnapshotObservableInject() {
    UniversalFirestore.prototype.collectionSnapshotObservable = collectionOrQuerySnapshotObservable;
    UniversalFirestore.prototype.querySnapshotObservable = collectionOrQuerySnapshotObservable;
}
//# sourceMappingURL=collection-query-snapshot-observable.js.map