import { Observable } from "rxjs";
import { FirestoreHelper } from "../helper";
function docObservable(doc, options) {
    if (typeof doc == "string") {
        return this.docObservable(this.doc(doc), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = doc.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
FirestoreHelper.prototype.docObservable = docObservable;
//# sourceMappingURL=doc-observable.js.map