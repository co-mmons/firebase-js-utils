import {Observable} from "rxjs";
import {extractSnapshotListenOptions} from "../extract-snapshot-listen-options";
import {UniversalFirestore} from "../firestore";
import {CollectionReference, Query, QuerySnapshot, SnapshotListenOptions} from "../types";

function collectionOrQuerySnapshotObservable(this: UniversalFirestore, collectionPathOrQuery: string | Query, options?: SnapshotListenOptions): Observable<QuerySnapshot> {

    if (typeof collectionPathOrQuery == "string") {
        return this.collectionSnapshotObservable(this.collection(collectionPathOrQuery), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(extractSnapshotListenOptions(options), subscriber);
        return () => unsubscribe();
    });
}

declare module "../firestore" {

    interface UniversalFirestore {
        collectionSnapshotObservable(collectionPathOrQuery: string | CollectionReference, options?: SnapshotListenOptions): Observable<QuerySnapshot>;
        querySnapshotObservable(query: Query, options?: SnapshotListenOptions): Observable<QuerySnapshot>;
    }

}

export function collectionQuerySnapshotObservableInject() {
    UniversalFirestore.prototype.collectionSnapshotObservable = collectionOrQuerySnapshotObservable;
    UniversalFirestore.prototype.querySnapshotObservable = collectionOrQuerySnapshotObservable;
}
