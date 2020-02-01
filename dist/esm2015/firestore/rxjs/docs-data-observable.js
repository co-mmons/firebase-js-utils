import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { map } from "rxjs/operators";
import { docsSnapshotsObservable } from "./docs-snapshots-observable";
export function docsDataObservable(query, options) {
    if (query instanceof client.Query) {
        return docsSnapshotsObservable(query, options).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data(options))));
    }
    else if (query instanceof admin.Query) {
        return docsSnapshotsObservable(query).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data())));
    }
    else {
        throw new Error("Invalid query");
    }
}
//# sourceMappingURL=docs-data-observable.js.map