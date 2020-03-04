import { Observable } from "rxjs";
import { extractSnapshotListenOptions } from "../client/extract-snapshot-listen-options";
import { DocumentReference } from "../union-types";
export function docSnapshotObservable(doc, options) {
    return new Observable(subscriber => {
        if (DocumentReference.isClient(doc)) {
            const unsubscribe = doc.onSnapshot(extractSnapshotListenOptions(options) || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }
        else if (DocumentReference.isAdmin(doc)) {
            const unsubscribe = doc.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }
    });
}
//# sourceMappingURL=doc-snapshot-observable.js.map