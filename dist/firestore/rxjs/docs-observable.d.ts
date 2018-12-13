import { Observable } from "rxjs";
import { GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions, SnapshotListenOptions } from "../types";
declare module "../firestore" {
    interface UniversalFirestore {
        docsObservable(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QueryDocumentSnapshot[]>;
    }
}
