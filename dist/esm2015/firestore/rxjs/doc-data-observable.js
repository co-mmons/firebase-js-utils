import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { map } from "rxjs/operators";
import { docSnapshotObservable } from "./doc-snapshot-observable";
export function docDataObservable(doc, options) {
    if (doc instanceof client.DocumentReference) {
        return docSnapshotObservable(doc, options).pipe(map(snapshot => snapshot.data()));
    }
    else if (doc instanceof admin.DocumentReference) {
        return docSnapshotObservable(doc).pipe(map(snapshot => snapshot.data()));
    }
    else {
        throw new Error("Invalid document reference");
    }
}
//# sourceMappingURL=doc-data-observable.js.map