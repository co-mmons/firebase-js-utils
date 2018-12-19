import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {extractSnapshotListenOptions} from "../extract-snapshot-listen-options";
import {UniversalFirestore} from "../firestore";
import {Query, QueryDocumentSnapshot, QuerySnapshot, SnapshotListenOptions} from "../types";

function docsSnapshotsObservable(this: UniversalFirestore, collectionPathOrQuery: string | Query, options?: SnapshotListenOptions): Observable<QueryDocumentSnapshot[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docsSnapshotsObservable(this.collection(collectionPathOrQuery), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(extractSnapshotListenOptions(options), subscriber);
        return () => unsubscribe();
    }).pipe(map((snapshot: QuerySnapshot) => snapshot.docs));
}

declare module "../firestore" {

    interface UniversalFirestore {
        docsSnapshotsObservable(collectionPathOrQuery: string | Query, options?: SnapshotListenOptions): Observable<QueryDocumentSnapshot[]>;
    }

}

export function docsSnapshotsObservableInject() {
    UniversalFirestore.prototype.docsSnapshotsObservable = docsSnapshotsObservable;
}