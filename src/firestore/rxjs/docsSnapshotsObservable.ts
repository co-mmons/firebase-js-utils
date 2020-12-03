import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {FirebaseAdminModule} from "../../FirebaseAdminModule";
import {FirebaseClientModule} from "../../FirebaseClientModule";
import {extractSnapshotListenOptions} from "../client/extractSnapshotListenOptions";
import {DocumentData} from "../shared-types";
import {Query} from "../union-types";

export function docsSnapshotsObservable<T = DocumentData>(query: FirebaseClientModule.firestore.Query<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<Array<FirebaseClientModule.firestore.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: FirebaseAdminModule.firestore.Query<T>): Observable<Array<FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T = DocumentData>(query: Query<T>): Observable<Array<FirebaseClientModule.firestore.QueryDocumentSnapshot<T> | FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>>>;

export function docsSnapshotsObservable<T>(query: Query<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<Array<FirebaseClientModule.firestore.QueryDocumentSnapshot<T> | FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>>> {

    if (Query.isClient(query)) {

        return new Observable<FirebaseClientModule.firestore.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(extractSnapshotListenOptions(options) || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs)) as any;

    } else if (Query.isAdmin(query)) {

        return new Observable<FirebaseAdminModule.firestore.QuerySnapshot<T>>(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe(map(snapshot => snapshot.docs)) as any;

    } else {
        throw new Error("Invalid query");
    }
}
