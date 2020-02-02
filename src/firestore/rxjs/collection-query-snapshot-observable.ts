import {Observable} from "rxjs";
import {DocumentData} from "../shared-types";
import {firestoreAdminTypes, firestoreClientTypes} from "../types";
import {CollectionReference, Query} from "../union-types";

export function querySnapshotObservable<T = DocumentData>(query: firestoreClientTypes.Query<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<firestoreClientTypes.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: firestoreAdminTypes.Query<T>): Observable<firestoreAdminTypes.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: Query<T>): Observable<firestoreClientTypes.QuerySnapshot<T> | firestoreAdminTypes.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: Query<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<firestoreClientTypes.QuerySnapshot<T> | firestoreAdminTypes.QuerySnapshot<T>> {

    if (Query.isClient(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(options || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        });
    } else if (Query.isAdmin(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        });
    }
}


export function collectionSnapshotObservable<T = DocumentData>(collection: firestoreClientTypes.CollectionReference<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<firestoreClientTypes.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: firestoreAdminTypes.CollectionReference<T> ): Observable<firestoreAdminTypes.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: CollectionReference<T>): Observable<firestoreClientTypes.QuerySnapshot<T> | firestoreAdminTypes.QuerySnapshot<T>>;

export function collectionSnapshotObservable<T = DocumentData>(collection: CollectionReference<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<firestoreClientTypes.QuerySnapshot<T> | firestoreAdminTypes.QuerySnapshot<T>> {

    if (CollectionReference.isClient(collection)) {
        return querySnapshotObservable(collection, options);
    } else if (CollectionReference.isAdmin(collection)) {
        return querySnapshotObservable(collection);
    } else {
        throw new Error("Invalid collection");
    }
}
