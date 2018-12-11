import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AbstractFirestore} from "../firestore";
import {GetOptions, Query, QueryDocumentSnapshot, QuerySnapshot, SnapshotOptions, SnapshotListenOptions} from "../types";

function docsObservable(this: AbstractFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QueryDocumentSnapshot[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docsObservable(this.collection(collectionPathOrQuery), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    }).pipe(map((snapshot: QuerySnapshot) => snapshot.docs));
}

declare module "../firestore" {

    interface AbstractFirestore {
        docsObservable(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QueryDocumentSnapshot[]>;
    }

}

AbstractFirestore.prototype.docsObservable = docsObservable;
