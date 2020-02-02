import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DocumentData} from "../shared-types";
import {firestoreAdminTypes, firestoreClientTypes} from "../types";
import {DocumentReference} from "../union-types";
import {docSnapshotObservable} from "./doc-snapshot-observable";

export function docDataObservable<T = DocumentData>(doc: firestoreClientTypes.DocumentReference<T>, options?: firestoreClientTypes.SnapshotOptions & firestoreClientTypes.SnapshotListenOptions): Observable<T>;

export function docDataObservable<T = DocumentData>(doc: firestoreAdminTypes.DocumentReference<T>): Observable<T>;

export function docDataObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<T>;

export function docDataObservable<T = DocumentData>(doc: DocumentReference<T>, options?: firestoreClientTypes.SnapshotOptions & firestoreClientTypes.SnapshotListenOptions): Observable<T> {

    if (DocumentReference.isClient(doc)) {
        return docSnapshotObservable(doc, options).pipe(map(snapshot => snapshot.data()));
    } else if (DocumentReference.isAdmin(doc)) {
        return docSnapshotObservable(doc).pipe(map(snapshot => snapshot.data()));
    } else {
        throw new Error("Invalid document reference");
    }
}
