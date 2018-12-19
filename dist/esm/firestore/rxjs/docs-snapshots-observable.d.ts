import { Observable } from "rxjs";
import { Query, QueryDocumentSnapshot, SnapshotListenOptions } from "../types";
declare module "../firestore" {
    interface UniversalFirestore {
        docsSnapshotsObservable(collectionPathOrQuery: string | Query, options?: SnapshotListenOptions): Observable<QueryDocumentSnapshot[]>;
    }
}
export declare function docsSnapshotsObservableInject(): void;
