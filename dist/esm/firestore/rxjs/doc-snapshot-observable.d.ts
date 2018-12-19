import { Observable } from "rxjs";
import { DocumentReference, DocumentSnapshot, SnapshotListenOptions } from "../types";
declare module "../firestore" {
    interface UniversalFirestore {
        docSnapshotObservable(doc: string | DocumentReference, options?: SnapshotListenOptions): Observable<DocumentSnapshot>;
    }
}
export declare function docSnapshotObservableInject(): void;
