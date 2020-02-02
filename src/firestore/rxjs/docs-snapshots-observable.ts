import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DocumentData} from "../shared-types";
import {firestoreAdminTypes, firestoreClientTypes} from "../types";
import {Query} from "../union-types";

export function docsSnapshotsObservable<T = DocumentData>(query: firestoreClientTypes.Query<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<Array<firestoreClientTypes.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: firestoreAdminTypes.Query<T>): Observable<Array<firestoreAdminTypes.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: Query<T>): Observable<Array<firestoreClientTypes.QueryDocumentSnapshot<T> | firestoreAdminTypes.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T>(query: Query<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<Array<firestoreClientTypes.QueryDocumentSnapshot<T> | firestoreAdminTypes.QueryDocumentSnapshot<T>>> {

    if (Query.isClient(query)) {

        return new Observable<firestoreClientTypes.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(options || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs)) as any;

    } else if (Query.isAdmin(query)) {

        return new Observable<firestoreAdminTypes.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs)) as any;

    } else {
        throw new Error("Invalid query");
    }
}
