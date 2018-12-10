import { Observable } from "rxjs";
import { DocumentReference, DocumentSnapshot, GetOptions, SnapshotOptions } from "../types";
declare module "../helper" {
    interface FirestoreHelper {
        docObservable(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions): Observable<DocumentSnapshot>;
    }
}
