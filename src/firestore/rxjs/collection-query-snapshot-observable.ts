import {Observable} from "rxjs";
import {UniversalFirestore} from "../firestore";
import {CollectionReference, GetOptions, Query, QuerySnapshot, SnapshotOptions, SnapshotListenOptions} from "../types";

function collectionOrQuerySnapshotObservable(this: UniversalFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot> {

    if (typeof collectionPathOrQuery == "string") {
        return this.collectionSnapshotObservable(this.collection(collectionPathOrQuery), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

declare module "../firestore" {

    interface UniversalFirestore {
        collectionSnapshotObservable(collectionPathOrQuery: string | CollectionReference, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
        querySnapshotObservable(query: Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
    }

}

UniversalFirestore.prototype.collectionSnapshotObservable = collectionOrQuerySnapshotObservable;
UniversalFirestore.prototype.querySnapshotObservable = collectionOrQuerySnapshotObservable;
