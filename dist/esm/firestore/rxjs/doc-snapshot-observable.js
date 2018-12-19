import { Observable } from "rxjs";
import { extractSnapshotListenOptions } from "../extract-snapshot-listen-options";
import { UniversalFirestore } from "../firestore";
function docSnapshotObservable(doc, options) {
    if (typeof doc == "string") {
        return this.docSnapshotObservable(this.doc(doc), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = doc.onSnapshot(extractSnapshotListenOptions(options), subscriber);
        return function () { return unsubscribe(); };
    });
}
export function docSnapshotObservableInject() {
    UniversalFirestore.prototype.docSnapshotObservable = docSnapshotObservable;
}
//# sourceMappingURL=doc-snapshot-observable.js.map