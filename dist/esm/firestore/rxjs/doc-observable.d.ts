import { Observable } from "rxjs";
import { DocumentReference, DocumentSnapshot, GetOptions, SnapshotOptions, SnapshotListenOptions } from "../types";
declare module "../firestore" {
    interface AbstractFirestore {
        docObservable(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<DocumentSnapshot>;
    }
}
