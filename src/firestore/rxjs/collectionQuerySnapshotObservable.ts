import {Observable} from "rxjs";
import {FirebaseAdminModule} from "../../FirebaseAdminModule";
import {FirebaseClientModule} from "../../FirebaseClientModule";
import {extractSnapshotListenOptions} from "../client/extractSnapshotListenOptions";
import {DocumentData} from "../shared-types";
import {CollectionReference, Query} from "../union-types";

export function querySnapshotObservable<T = DocumentData>(query: FirebaseClientModule.firestore.Query<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<FirebaseClientModule.firestore.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: FirebaseAdminModule.firestore.Query<T>): Observable<FirebaseAdminModule.firestore.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: Query<T>): Observable<FirebaseClientModule.firestore.QuerySnapshot<T> | FirebaseAdminModule.firestore.QuerySnapshot<T>>;

export function querySnapshotObservable<T = DocumentData>(query: Query<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<FirebaseClientModule.firestore.QuerySnapshot<T> | FirebaseAdminModule.firestore.QuerySnapshot<T>> {

    if (Query.isClient(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(extractSnapshotListenOptions(options) || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        });
    } else if (Query.isAdmin(query)) {
        return new Observable(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        });
    }
}


export function collectionSnapshotObservable<T = DocumentData>(collection: FirebaseClientModule.firestore.CollectionReference<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<FirebaseClientModule.firestore.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: FirebaseAdminModule.firestore.CollectionReference<T> ): Observable<FirebaseAdminModule.firestore.QuerySnapshot>;

export function collectionSnapshotObservable<T = DocumentData>(collection: CollectionReference<T>): Observable<FirebaseClientModule.firestore.QuerySnapshot<T> | FirebaseAdminModule.firestore.QuerySnapshot<T>>;

export function collectionSnapshotObservable<T = DocumentData>(collection: CollectionReference<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<FirebaseClientModule.firestore.QuerySnapshot<T> | FirebaseAdminModule.firestore.QuerySnapshot<T>> {

    if (CollectionReference.isClient(collection)) {
        return querySnapshotObservable(collection, options);
    } else if (CollectionReference.isAdmin(collection)) {
        return querySnapshotObservable(collection);
    } else {
        throw new Error("Invalid collection");
    }
}
