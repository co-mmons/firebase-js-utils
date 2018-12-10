import { Observable } from "rxjs";
import { FirestoreHelper } from "../helper";
function collectionOrQueryObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.collectionObservable(this.collection(collectionPathOrQuery), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
FirestoreHelper.prototype.collectionObservable = collectionOrQueryObservable;
FirestoreHelper.prototype.queryObservable = collectionOrQueryObservable;
//# sourceMappingURL=query-observable.js.map