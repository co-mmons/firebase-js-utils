import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { extractSnapshotListenOptions } from "../client/extract-snapshot-listen-options";
import { Query } from "../union-types";
export function docsSnapshotsObservable(query, options) {
    if (Query.isClient(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(extractSnapshotListenOptions(options) || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs));
    }
    else if (Query.isAdmin(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs));
    }
    else {
        throw new Error("Invalid query");
    }
}
//# sourceMappingURL=docs-snapshots-observable.js.map