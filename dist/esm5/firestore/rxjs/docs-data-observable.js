import { map } from "rxjs/operators";
import { Query } from "../union-types";
import { docsSnapshotsObservable } from "./docs-snapshots-observable";
export function docsDataObservable(query, options) {
    if (Query.isClient(query)) {
        return docsSnapshotsObservable(query, options).pipe(map(function (snapshots) { return snapshots.map(function (snapshot) { return snapshot.data(options); }); }));
    }
    else if (Query.isAdmin(query)) {
        return docsSnapshotsObservable(query).pipe(map(function (snapshots) { return snapshots.map(function (snapshot) { return snapshot.data(); }); }));
    }
    else {
        throw new Error("Invalid query");
    }
}
//# sourceMappingURL=docs-data-observable.js.map