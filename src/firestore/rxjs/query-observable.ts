import {Observable} from "rxjs";
import {UniversalFirestore} from "../firestore";
import {CollectionReference, GetOptions, Query, QuerySnapshot, SnapshotOptions, SnapshotListenOptions} from "../types";

function collectionOrQueryObservable(this: UniversalFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot> {

    if (typeof collectionPathOrQuery == "string") {
        return this.collectionObservable(this.collection(collectionPathOrQuery), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

declare module "../firestore" {

    interface UniversalFirestore {
        collectionObservable(collectionPathOrQuery: string | CollectionReference, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
        queryObservable(query: Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
    }

}

UniversalFirestore.prototype.collectionObservable = collectionOrQueryObservable;
UniversalFirestore.prototype.queryObservable = collectionOrQueryObservable;
