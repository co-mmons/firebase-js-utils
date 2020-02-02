import {Observable} from "rxjs";
import {DocumentData} from "../shared-types";
import {firestoreAdminTypes, firestoreClientTypes} from "../types";
import {DocumentReference} from "../union-types";

export function docSnapshotObservable<T = DocumentData>(doc: firestoreClientTypes.DocumentReference<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<firestoreClientTypes.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: firestoreAdminTypes.DocumentReference<T>): Observable<firestoreAdminTypes.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<firestoreClientTypes.DocumentSnapshot<T> | firestoreAdminTypes.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<firestoreClientTypes.DocumentSnapshot<T> | firestoreAdminTypes.DocumentSnapshot<T>> {

    return new Observable(subscriber => {

        if (DocumentReference.isClient(doc)) {
            const unsubscribe = doc.onSnapshot(options || {}, snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        } else if (DocumentReference.isAdmin(doc)) {
            const unsubscribe = doc.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }

    });

}
