import { Observable } from "rxjs";
import { UniversalFirestore } from "../firestore";
function collectionOrQueryObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.collectionObservable(this.collection(collectionPathOrQuery), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
UniversalFirestore.prototype.collectionObservable = collectionOrQueryObservable;
UniversalFirestore.prototype.queryObservable = collectionOrQueryObservable;
//# sourceMappingURL=query-observable.js.map