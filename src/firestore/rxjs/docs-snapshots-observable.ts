import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {extractSnapshotListenOptions} from "../client/extract-snapshot-listen-options";
import {DocumentData} from "../shared-types";
import {firestoreAdminModuleTypes, firestoreClientModuleTypes} from "../types";
import {Query} from "../union-types";

export function docsSnapshotsObservable<T = DocumentData>(query: firestoreClientModuleTypes.Query<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<Array<firestoreClientModuleTypes.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: firestoreAdminModuleTypes.Query<T>): Observable<Array<firestoreAdminModuleTypes.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: Query<T>): Observable<Array<firestoreClientModuleTypes.QueryDocumentSnapshot<T> | firestoreAdminModuleTypes.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T>(query: Query<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<Array<firestoreClientModuleTypes.QueryDocumentSnapshot<T> | firestoreAdminModuleTypes.QueryDocumentSnapshot<T>>> {

    if (Query.isClient(query)) {

        return new Observable<firestoreClientModuleTypes.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(extractSnapshotListenOptions(options) || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs)) as any;

    } else if (Query.isAdmin(query)) {

        return new Observable<firestoreAdminModuleTypes.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs)) as any;

    } else {
        throw new Error("Invalid query");
    }
}
