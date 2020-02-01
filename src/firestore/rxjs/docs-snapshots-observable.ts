import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DocumentData} from "../shared-types";
import {firestoreAdmin, firestoreClient} from "../types";
import {Query} from "../union-types";

export function docsSnapshotsObservable<T = DocumentData>(query: firestoreClient.Query<T>, options?: firestoreClient.SnapshotListenOptions): Observable<Array<firestoreClient.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: firestoreAdmin.Query<T>): Observable<Array<firestoreAdmin.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: Query<T>): Observable<Array<firestoreClient.QueryDocumentSnapshot<T> | firestoreAdmin.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T>(query: Query<T>, options?: firestoreClient.SnapshotListenOptions): Observable<Array<firestoreClient.QueryDocumentSnapshot<T> | firestoreAdmin.QueryDocumentSnapshot<T>>> {

    if (Query.isClient(query)) {

        return new Observable<firestoreClient.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(options,snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs)) as any;

    } else if (Query.isAdmin(query)) {

        return new Observable<firestoreAdmin.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs)) as any;

    } else {
        throw new Error("Invalid query");
    }
}
