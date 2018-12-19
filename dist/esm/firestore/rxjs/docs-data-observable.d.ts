import { Observable } from "rxjs";
import { SerializationOptions } from "../serialization-options";
import { Query, SnapshotListenOptions, SnapshotOptions } from "../types";
declare module "../firestore" {
    interface UniversalFirestore {
        docsDataObservable<V = any>(collectionPathOrQuery: string | Query, options?: SnapshotOptions & SnapshotListenOptions & SerializationOptions): Observable<V[]>;
    }
}
export declare function docsDataObservableInject(): void;
