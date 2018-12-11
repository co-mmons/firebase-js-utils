import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AbstractFirestore } from "../firestore";
function docsObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.docsObservable(this.collection(collectionPathOrQuery), options);
    }
    return new Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    }).pipe(map(function (snapshot) { return snapshot.docs; }));
}
AbstractFirestore.prototype.docsObservable = docsObservable;
//# sourceMappingURL=docs-observable.js.map