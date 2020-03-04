import { Observable } from "rxjs";
import { extractSnapshotListenOptions } from "../client/extract-snapshot-listen-options";
import { DocumentReference } from "../union-types";
export function docSnapshotObservable(doc, options) {
    return new Observable(function (subscriber) {
        if (DocumentReference.isClient(doc)) {
            var unsubscribe_1 = doc.onSnapshot(extractSnapshotListenOptions(options) || {}, function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe_1(); };
        }
        else if (DocumentReference.isAdmin(doc)) {
            var unsubscribe_2 = doc.onSnapshot(function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe_2(); };
        }
    });
}
//# sourceMappingURL=doc-snapshot-observable.js.map