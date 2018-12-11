import { Observable } from "rxjs";
import { AbstractFirestore } from "../firestore";
function collectionOrQueryObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.collectionObservable(this.collection(collectionPathOrQuery), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
AbstractFirestore.prototype.collectionObservable = collectionOrQueryObservable;
AbstractFirestore.prototype.queryObservable = collectionOrQueryObservable;
//# sourceMappingURL=query-observable.js.map