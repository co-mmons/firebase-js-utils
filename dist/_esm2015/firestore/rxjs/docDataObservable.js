import { map } from "rxjs/operators";
import { DocumentReference } from "../union-types";
import { docSnapshotObservable } from "./docSnapshotObservable";
export function docDataObservable(doc, options) {
    if (DocumentReference.isClient(doc)) {
        return docSnapshotObservable(doc, options).pipe(map(snapshot => snapshot.data()));
    }
    else if (DocumentReference.isAdmin(doc)) {
        return docSnapshotObservable(doc).pipe(map(snapshot => snapshot.data()));
    }
    else {
        throw new Error("Invalid document reference");
    }
}
//# sourceMappingURL=docDataObservable.js.map