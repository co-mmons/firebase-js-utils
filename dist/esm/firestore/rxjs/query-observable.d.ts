import { Observable } from "rxjs";
import { CollectionReference, GetOptions, Query, QuerySnapshot, SnapshotOptions } from "../types";
declare module "../helper" {
    interface FirestoreHelper {
        collectionObservable(collectionPathOrQuery: string | CollectionReference, options?: GetOptions & SnapshotOptions): Observable<QuerySnapshot>;
        queryObservable(query: Query, options?: GetOptions & SnapshotOptions): Observable<QuerySnapshot>;
    }
}
