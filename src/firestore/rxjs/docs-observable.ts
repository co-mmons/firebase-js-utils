import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {FirestoreHelper} from "../helper";
import {GetOptions, Query, QueryDocumentSnapshot, QuerySnapshot, SnapshotOptions} from "../types";

function docsObservable(this: FirestoreHelper, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Observable<QueryDocumentSnapshot[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docsObservable(this.collection(collectionPathOrQuery), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    }).pipe(map((snapshot: QuerySnapshot) => snapshot.docs));
}

declare module "../helper" {

    interface FirestoreHelper {
        docsObservable(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Observable<QueryDocumentSnapshot[]>;
    }

}

FirestoreHelper.prototype.docsObservable = docsObservable;
