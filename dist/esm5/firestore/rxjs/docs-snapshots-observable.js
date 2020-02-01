import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
export function docsSnapshotsObservable(query, options) {
    if (query instanceof client.Query) {
        return new Observable(function (subscriber) {
            var unsubscribe = query.onSnapshot(options, function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe(); };
        }).pipe(map(function (snapshot) { return snapshot.docs; }));
    }
    else if (query instanceof admin.Query) {
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