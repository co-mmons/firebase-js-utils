import { Observable } from "rxjs";
import { SerializationOptions } from "../../serialization-options";
import { GetOptions, Query, SnapshotOptions } from "../../types";
declare module "../firestore" {
    interface AngularFirestore {
        docsDataObservable<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V[]>;
    }
}
