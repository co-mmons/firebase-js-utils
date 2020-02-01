import {Observable} from "rxjs";
import {DocumentData} from "../shared-types";
import {firestoreAdmin, firestoreClient} from "../types";
import {CollectionReference, Query} from "../union-types";

export function querySnapshotObservable<T = DocumentData>(query: firestoreClient.Query<T>, options?: firestoreClient.SnapshotListenOptions): Observable<firestoreClient.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: firestoreAdmin.Query<T>): Observable<firestoreAdmin.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: Query<T>): Observable<firestoreClient.QuerySnapshot<T> | firestoreAdmin.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: Query<T>, options?: firestoreClient.SnapshotListenOptions): Observable<firestoreClient.QuerySnapshot<T> | firestoreAdmin.QuerySnapshot<T>> {

    if (Query.isClient(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(options, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        });
    } else if (Query.isAdmin(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        });
    }
}


export function collectionSnapshotObservable<T = DocumentData>(collection: firestoreClient.CollectionReference<T>, options?: firestoreClient.SnapshotListenOptions): Observable<firestoreClient.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: firestoreAdmin.CollectionReference<T> ): Observable<firestoreAdmin.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: CollectionReference<T>): Observable<firestoreClient.QuerySnapshot<T> | firestoreAdmin.QuerySnapshot<T>>;

export function collectionSnapshotObservable<T = DocumentData>(collection: CollectionReference<T>, options?: firestoreClient.SnapshotListenOptions): Observable<firestoreClient.QuerySnapshot<T> | firestoreAdmin.QuerySnapshot<T>> {

    if (CollectionReference.isClient(collection)) {
        return querySnapshotObservable(collection, options);
    } else if (CollectionReference.isAdmin(collection)) {
        return querySnapshotObservable(collection);
    } else {
        throw new Error("Invalid collection");
    }
}
