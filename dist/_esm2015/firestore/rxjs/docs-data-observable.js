import { map } from "rxjs/operators";
import { Query } from "../union-types";
import { docsSnapshotsObservable } from "./docs-snapshots-observable";
export function docsDataObservable(query, options) {
    if (Query.isClient(query)) {
        return docsSnapshotsObservable(query, options).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data(options))));
    }
    else if (Query.isAdmin(query)) {
        return docsSnapshotsObservable(query).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data())));
    }
    else {
        throw new Error("Invalid query");
    }
}
//# sourceMappingURL=docs-data-observable.js.map