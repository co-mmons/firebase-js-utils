import {Observable} from "rxjs";
import {DocumentData} from "../shared-types";
import {firestoreAdminModuleTypes, firestoreClientModuleTypes} from "../types";
import {CollectionReference, Query} from "../union-types";

export function querySnapshotObservable<T = DocumentData>(query: firestoreClientModuleTypes.Query<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<firestoreClientModuleTypes.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: firestoreAdminModuleTypes.Query<T>): Observable<firestoreAdminModuleTypes.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: Query<T>): Observable<firestoreClientModuleTypes.QuerySnapshot<T> | firestoreAdminModuleTypes.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: Query<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<firestoreClientModuleTypes.QuerySnapshot<T> | firestoreAdminModuleTypes.QuerySnapshot<T>> {

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


export function collectionSnapshotObservable<T = DocumentData>(collection: firestoreClientModuleTypes.CollectionReference<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<firestoreClientModuleTypes.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: firestoreAdminModuleTypes.CollectionReference<T> ): Observable<firestoreAdminModuleTypes.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: CollectionReference<T>): Observable<firestoreClientModuleTypes.QuerySnapshot<T> | firestoreAdminModuleTypes.QuerySnapshot<T>>;

export function collectionSnapshotObservable<T = DocumentData>(collection: CollectionReference<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<firestoreClientModuleTypes.QuerySnapshot<T> | firestoreAdminModuleTypes.QuerySnapshot<T>> {

    if (CollectionReference.isClient(collection)) {
        return querySnapshotObservable(collection, options);
    } else if (CollectionReference.isAdmin(collection)) {
        return querySnapshotObservable(collection);
    } else {
        throw new Error("Invalid collection");
    }
}
