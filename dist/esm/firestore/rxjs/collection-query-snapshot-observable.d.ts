import { Observable } from "rxjs";
import { CollectionReference, GetOptions, Query, QuerySnapshot, SnapshotOptions, SnapshotListenOptions } from "../types";
declare module "../firestore" {
    interface UniversalFirestore {
        collectionSnapshotObservable(collectionPathOrQuery: string | CollectionReference, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
        querySnapshotObservable(query: Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
    }
}
