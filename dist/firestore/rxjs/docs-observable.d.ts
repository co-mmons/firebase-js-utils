import { Observable } from "rxjs";
import { GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions } from "../types";
declare module "../helper" {
    interface FirestoreHelper {
        docsObservable(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Observable<QueryDocumentSnapshot[]>;
    }
}
