import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { Observable } from "rxjs";
export function docSnapshotObservable(doc, options) {
    return new Observable(function (subscriber) {
        if (doc instanceof client.DocumentReference) {
            var unsubscribe_1 = doc.onSnapshot(options, function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe_1(); };
        }
        else if (doc instanceof admin.DocumentReference) {
            var unsubscribe_2 = doc.onSnapshot(function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe_2(); };
        }
    });
}
//# sourceMappingURL=doc-snapshot-observable.js.map