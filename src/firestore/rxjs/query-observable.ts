import {Observable} from "rxjs";
import {AbstractFirestore} from "../firestore";
import {CollectionReference, GetOptions, Query, QuerySnapshot, SnapshotOptions, SnapshotListenOptions} from "../types";

function collectionOrQueryObservable(this: AbstractFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot> {

    if (typeof collectionPathOrQuery == "string") {
        return this.collectionObservable(this.collection(collectionPathOrQuery), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

declare module "../firestore" {

    interface AbstractFirestore {
        collectionObservable(collectionPathOrQuery: string | CollectionReference, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
        queryObservable(query: Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
    }

}

AbstractFirestore.prototype.collectionObservable = collectionOrQueryObservable;
AbstractFirestore.prototype.queryObservable = collectionOrQueryObservable;
