import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UniversalFirestore } from "../firestore";
function docsSnapshotsObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.docsSnapshotsObservable(this.collection(collectionPathOrQuery), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    }).pipe(map(function (snapshot) { return snapshot.docs; }));
}
UniversalFirestore.prototype.docsSnapshotsObservable = docsSnapshotsObservable;
//# sourceMappingURL=docs-snapshots-observable.js.map