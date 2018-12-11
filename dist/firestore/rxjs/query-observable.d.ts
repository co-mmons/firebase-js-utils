import { Observable } from "rxjs";
import { CollectionReference, GetOptions, Query, QuerySnapshot, SnapshotOptions, SnapshotListenOptions } from "../types";
declare module "../firestore" {
    interface AbstractFirestore {
        collectionObservable(collectionPathOrQuery: string | CollectionReference, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
        queryObservable(query: Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QuerySnapshot>;
    }
}
