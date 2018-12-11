import {Observable} from "rxjs";
import {AbstractFirestore} from "../firestore";
import {DocumentReference, DocumentSnapshot, GetOptions, SnapshotOptions, SnapshotListenOptions} from "../types";

function docObservable(this: AbstractFirestore, doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<DocumentSnapshot> {

    if (typeof doc == "string") {
        return this.docObservable(this.doc(doc), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = doc.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

declare module "../firestore" {

    interface AbstractFirestore {
        docObservable(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SnapshotListenOptions): Observable<DocumentSnapshot>;
    }

}

AbstractFirestore.prototype.docObservable = docObservable;
