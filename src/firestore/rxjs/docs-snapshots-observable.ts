import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {DocumentData} from "../types/shared";

export function docsSnapshotsObservable<T = DocumentData>(query: client.Query<T>, options?: client.SnapshotListenOptions): Observable<Array<client.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: admin.Query<T>): Observable<Array<admin.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: client.Query<T> | admin.Query<T>, options?: client.SnapshotListenOptions): Observable<Array<client.QueryDocumentSnapshot<T> | admin.QueryDocumentSnapshot<T>>> {

    if (query instanceof client.Query) {

        return new Observable<client.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(options,snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs));

    } else if (query instanceof admin.Query) {

        return new Observable<admin.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs));

    } else {
        throw new Error("Invalid query");
    }
}
