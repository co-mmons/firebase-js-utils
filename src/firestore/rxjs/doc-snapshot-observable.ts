import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {Observable} from "rxjs";
import {DocumentData} from "../shared-types";

export function docSnapshotObservable<T = DocumentData>(doc: client.DocumentReference<T>, options?: client.SnapshotListenOptions): Observable<client.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: admin.DocumentReference<T>): Observable<admin.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: client.DocumentReference<T> | admin.DocumentReference<T>, options?: client.SnapshotListenOptions): Observable<client.DocumentSnapshot<T> | admin.DocumentSnapshot<T>> {

    return new Observable(subscriber => {

        if (doc instanceof client.DocumentReference) {
            const unsubscribe = doc.onSnapshot(options,snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        } else if (doc instanceof admin.DocumentReference) {
            const unsubscribe = doc.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }

    });

}
