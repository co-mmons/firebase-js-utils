import { Observable } from "rxjs";
import { GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions, SnapshotListenOptions } from "../types";
declare module "../firestore" {
    interface UniversalFirestore {
        docsSnapshotsObservable(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<QueryDocumentSnapshot[]>;
    }
}
