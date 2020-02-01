import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {Observable} from "rxjs";
import {DocumentData} from "../shared-types";

export function querySnapshotObservable<T = DocumentData>(query: client.Query<T>): Observable<client.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: admin.Query<T>): Observable<admin.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: client.Query<T> | admin.Query<T>): Observable<client.QuerySnapshot<T> | admin.QuerySnapshot<T>> {

    return new Observable(subscriber => {
        const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
        return () => unsubscribe();
    });
}

export function collectionSnapshotObservable<T = DocumentData>(collection: client.CollectionReference<T> ): Observable<client.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: admin.CollectionReference<T> ): Observable<admin.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: client.CollectionReference<T> | admin.CollectionReference<T>): Observable<client.QuerySnapshot | admin.QuerySnapshot> {

    if (collection instanceof client.CollectionReference) {
        return querySnapshotObservable(collection);
    } else if (collection instanceof admin.CollectionReference) {
        return querySnapshotObservable(collection);
    } else {
        throw new Error("Invalid collection");
    }
}
