import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DocumentData} from "../types/shared";
import {docSnapshotObservable} from "./doc-snapshot-observable";

export function docDataObservable<T = DocumentData>(doc: client.DocumentReference<T>, options?: client.SnapshotOptions & client.SnapshotListenOptions): Observable<T>;

export function docDataObservable<T = DocumentData>(doc: admin.DocumentReference<T>): Observable<T>;

export function docDataObservable<T = DocumentData>(doc: client.DocumentReference<T> | admin.DocumentReference<T>, options?: client.SnapshotOptions & client.SnapshotListenOptions): Observable<T> {

    if (doc instanceof client.DocumentReference) {
        return docSnapshotObservable(doc, options).pipe(map(snapshot => snapshot.data()));
    } else if (doc instanceof admin.DocumentReference) {
        return docSnapshotObservable(doc).pipe(map(snapshot => snapshot.data()));
    } else {
        throw new Error("Invalid document reference");
    }
}
