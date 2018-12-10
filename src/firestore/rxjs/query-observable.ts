import {Observable} from "rxjs";
import {FirestoreHelper} from "../helper";
import {CollectionReference, GetOptions, Query, QuerySnapshot, SnapshotOptions} from "../types";

function collectionOrQueryObservable(this: FirestoreHelper, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Observable<QuerySnapshot> {

    if (typeof collectionPathOrQuery == "string") {
        return this.collectionObservable(this.collection(collectionPathOrQuery), options);
    }

    return new Observable(subscriber => {
        let unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

declare module "../helper" {

    interface FirestoreHelper {
        collectionObservable(collectionPathOrQuery: string | CollectionReference, options?: GetOptions & SnapshotOptions): Observable<QuerySnapshot>;
        queryObservable(query: Query, options?: GetOptions & SnapshotOptions): Observable<QuerySnapshot>;
    }

}

FirestoreHelper.prototype.collectionObservable = collectionOrQueryObservable;
FirestoreHelper.prototype.queryObservable = collectionOrQueryObservable;
