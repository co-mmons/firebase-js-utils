import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Query } from "../union-types";
export function docsSnapshotsObservable(query, options) {
    if (Query.isClient(query)) {
        return new Observable(function (subscriber) {
            var unsubscribe = query.onSnapshot(options || {}, function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe(); };
        }).pipe(map(function (snapshot) { return snapshot.docs; }));
    }
    else if (Query.isAdmin(query)) {
        return new Observable(function (subscriber) {
            var unsubscribe = query.onSnapshot(function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe(); };
        }).pipe(map(function (snapshot) { return snapshot.docs; }));
    }
    else {
        throw new Error("Invalid query");
    }
}
//# sourceMappingURL=docs-snapshots-observable.js.map