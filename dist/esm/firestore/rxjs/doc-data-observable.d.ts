import { DocumentReference, GetOptions, SnapshotOptions } from "../types";
import { Observable } from "rxjs";
import { SerializationOptions } from "../serialization-options";
declare module "../firestore" {
    interface UniversalFirestore {
        docDataObservable<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V>;
    }
}
