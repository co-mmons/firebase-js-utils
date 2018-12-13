import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UniversalFirestore} from "../firestore";
import {GetOptions, Query, QueryDocumentSnapshot, QuerySnapshot, SnapshotOptions, SnapshotListenOptions} from "../types";

function docsSnapshotsObservable(this: UniversalFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QueryDocumentSnapshot[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docsSnapshotsObservable(this.collection(collectionPathOrQuery), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    }).pipe(map((snapshot: QuerySnapshot) => snapshot.docs));
}

declare module "../firestore" {

    interface UniversalFirestore {
        docsSnapshotsObservable(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QueryDocumentSnapshot[]>;
    }

}

UniversalFirestore.prototype.docsSnapshotsObservable = docsSnapshotsObservable;
