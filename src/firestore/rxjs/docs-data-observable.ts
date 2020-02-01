import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DocumentData} from "../shared-types";
import {firestoreAdmin, firestoreClient} from "../types";
import {Query} from "../union-types";
import {docsSnapshotsObservable} from "./docs-snapshots-observable";

export function docsDataObservable<T = DocumentData>(query: firestoreClient.Query<T>, options?: firestoreClient.SnapshotOptions & firestoreClient.SnapshotListenOptions): Observable<T[]>;

export function docsDataObservable<T = DocumentData>(query: firestoreAdmin.Query<T>): Observable<T[]>;

export function docsDataObservable<T = DocumentData>(query: Query<T>): Observable<T[]>;

export function docsDataObservable<T = DocumentData>(query: Query<T>, options?: firestoreClient.SnapshotOptions & firestoreClient.SnapshotListenOptions): Observable<T[]> {

    if (Query.isClient(query)) {
        return docsSnapshotsObservable(query, options).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data(options))));
    } else if (Query.isAdmin(query)) {
        return docsSnapshotsObservable(query).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data())));
    } else {
        throw new Error("Invalid query");
    }
}
