import {Observable} from "rxjs";
import {extractSnapshotListenOptions} from "../extract-snapshot-listen-options";
import {UniversalFirestore} from "../firestore";
import {DocumentReference, DocumentSnapshot, SnapshotListenOptions} from "../types";

function docSnapshotObservable(this: UniversalFirestore, doc: string | DocumentReference, options?: SnapshotListenOptions): Observable<DocumentSnapshot> {

    if (typeof doc == "string") {
        return this.docSnapshotObservable(this.doc(doc), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = doc.onSnapshot(extractSnapshotListenOptions(options), subscriber);
        return () => unsubscribe();
    });
}

declare module "../firestore" {

    interface UniversalFirestore {
        docSnapshotObservable(doc: string | DocumentReference, options?: SnapshotListenOptions): Observable<DocumentSnapshot>;
    }

}

export function docSnapshotObservableInject() {
    UniversalFirestore.prototype.docSnapshotObservable = docSnapshotObservable;
}
