import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { Observable } from "rxjs";
export function docSnapshotObservable(doc, options) {
    return new Observable(subscriber => {
        if (doc instanceof client.DocumentReference) {
            const unsubscribe = doc.onSnapshot(options, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }
        else if (doc instanceof admin.DocumentReference) {
            const unsubscribe = doc.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }
    });
}
//# sourceMappingURL=doc-snapshot-observable.js.map