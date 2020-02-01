import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
export function docsSnapshotsObservable(query, options) {
    if (query instanceof client.Query) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(options, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs));
    }
    else if (query instanceof admin.Query) {
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