import {Observable} from "rxjs";
import {FirestoreHelper} from "../helper";
import {DocumentReference, DocumentSnapshot, GetOptions, SnapshotOptions} from "../types";

function docObservable(this: FirestoreHelper, doc: string | DocumentReference, options?: GetOptions & SnapshotOptions): Observable<DocumentSnapshot> {

    if (typeof doc == "string") {
        return this.docObservable(this.doc(doc), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = doc.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

declare module "../helper" {

    interface FirestoreHelper {
        docObservable(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions): Observable<DocumentSnapshot>;
    }

}

FirestoreHelper.prototype.docObservable = docObservable;
