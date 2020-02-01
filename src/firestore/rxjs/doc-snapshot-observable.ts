import {Observable} from "rxjs";
import {DocumentData} from "../shared-types";
import {firestoreAdmin, firestoreClient} from "../types";
import {DocumentReference} from "../union-types";

export function docSnapshotObservable<T = DocumentData>(doc: firestoreClient.DocumentReference<T>, options?: firestoreClient.SnapshotListenOptions): Observable<firestoreClient.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: firestoreAdmin.DocumentReference<T>): Observable<firestoreAdmin.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<firestoreClient.DocumentSnapshot<T> | firestoreAdmin.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>, options?: firestoreClient.SnapshotListenOptions): Observable<firestoreClient.DocumentSnapshot<T> | firestoreAdmin.DocumentSnapshot<T>> {

    return new Observable(subscriber => {

        if (DocumentReference.isClient(doc)) {
            const unsubscribe = doc.onSnapshot(options,snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        } else if (DocumentReference.isAdmin(doc)) {
            const unsubscribe = doc.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }

    });

}
