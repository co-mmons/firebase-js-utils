import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DocumentData} from "../types/shared";
import {docsSnapshotsObservable} from "./docs-snapshots-observable";

export function docsDataObservable<T = DocumentData>(query: client.Query<T>, options?: client.SnapshotOptions & client.SnapshotListenOptions): Observable<T[]>;

export function docsDataObservable<T = DocumentData>(query: admin.Query<T>): Observable<T[]>;

export function docsDataObservable<T = DocumentData>(query: client.Query<T> | admin.Query<T>, options?: client.SnapshotOptions & client.SnapshotListenOptions): Observable<T[]> {

    if (query instanceof client.Query) {
        return docsSnapshotsObservable(query, options).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data(options))));
    } else if (query instanceof admin.Query) {
        return docsSnapshotsObservable(query).pipe(map(snapshots => snapshots.map(snapshot => snapshot.data())));
    } else {
        throw new Error("Invalid query");
    }
}
