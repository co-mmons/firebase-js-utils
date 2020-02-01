import { map } from "rxjs/operators";
import { DocumentReference } from "../union-types";
import { docSnapshotObservable } from "./doc-snapshot-observable";
export function docDataObservable(doc, options) {
    if (DocumentReference.isClient(doc)) {
        return docSnapshotObservable(doc, options).pipe(map(function (snapshot) { return snapshot.data(); }));
    }
    else if (DocumentReference.isAdmin(doc)) {
        return docSnapshotObservable(doc).pipe(map(function (snapshot) { return snapshot.data(); }));
    }
    else {
        throw new Error("Invalid document reference");
    }
}
//# sourceMappingURL=doc-data-observable.js.map