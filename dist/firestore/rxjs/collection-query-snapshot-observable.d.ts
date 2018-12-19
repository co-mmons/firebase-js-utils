import { Observable } from "rxjs";
import { CollectionReference, Query, QuerySnapshot, SnapshotListenOptions } from "../types";
declare module "../firestore" {
    interface UniversalFirestore {
        collectionSnapshotObservable(collectionPathOrQuery: string | CollectionReference, options?: SnapshotListenOptions): Observable<QuerySnapshot>;
        querySnapshotObservable(query: Query, options?: SnapshotListenOptions): Observable<QuerySnapshot>;
    }
}
export declare function collectionQuerySnapshotObservableInject(): void;
