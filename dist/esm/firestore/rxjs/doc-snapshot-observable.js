import { Observable } from "rxjs";
import { UniversalFirestore } from "../firestore";
function docSnapshotObservable(doc, options) {
    if (typeof doc == "string") {
        return this.docSnapshotObservable(this.doc(doc), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = doc.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
UniversalFirestore.prototype.docSnapshotObservable = docSnapshotObservable;
//# sourceMappingURL=doc-snapshot-observable.js.map