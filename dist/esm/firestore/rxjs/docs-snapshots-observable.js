import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { extractSnapshotListenOptions } from "../extract-snapshot-listen-options";
import { UniversalFirestore } from "../firestore";
function docsSnapshotsObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.docsSnapshotsObservable(this.collection(collectionPathOrQuery), options);
    }
    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(extractSnapshotListenOptions(options), subscriber);
        return () => unsubscribe();
    }).pipe(map((snapshot) => snapshot.docs));
}
export function docsSnapshotsObservableInject() {
    UniversalFirestore.prototype.docsSnapshotsObservable = docsSnapshotsObservable;
}
//# sourceMappingURL=docs-snapshots-observable.js.map