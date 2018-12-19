import { Observable } from "rxjs";
import { SerializationOptions } from "../serialization-options";
import { DocumentReference, SnapshotListenOptions, SnapshotOptions } from "../types";
declare module "../firestore" {
    interface UniversalFirestore {
        docDataObservable<V = any>(doc: string | DocumentReference, options?: SnapshotOptions & SnapshotListenOptions & SerializationOptions): Observable<V>;
    }
}
export declare function docDataObservableInject(): void;
