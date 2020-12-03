import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {FirebaseAdminModule} from "../../FirebaseAdminModule";
import {FirebaseClientModule} from "../../FirebaseClientModule";
import {DocumentData} from "../shared-types";
import {Query} from "../union-types";
import {docsSnapshotsObservable} from "./docsSnapshotsObservable";

export function docsDataObservable<T = DocumentData>(query: FirebaseClientModule.firestore.Query<T>, options?: FirebaseClientModule.firestore.SnapshotOptions & FirebaseClientModule.firestore.SnapshotListenOptions): Observable<T[]>;

export function docsDataObservable<T = DocumentData>(query: FirebaseAdminModule.firestore.Query<T>): Observable<T[]>;

export function docsDataObservable<T = DocumentData>(query: Query<T>): Observable<T[]>;

export function docsDataObservable<T = DocumentData>(query: Query<T>, options?: FirebaseClientModule.firestore.SnapshotOptions & FirebaseClientModule.firestore.SnapshotListenOptions): Observable<T[]> {

    if (Query.isClient(query)) {
        return docsSnapshotsObservable(query, options).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data(options))));
    } else if (Query.isAdmin(query)) {
        return docsSnapshotsObservable(query).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data())));
    } else {
        throw new Error("Invalid query");
    }
}
