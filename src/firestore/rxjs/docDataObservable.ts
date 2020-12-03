import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {FirebaseAdminModule} from "../../FirebaseAdminModule";
import {FirebaseClientModule} from "../../FirebaseClientModule";
import {DocumentData} from "../shared-types";
import {DocumentReference} from "../union-types";
import {docSnapshotObservable} from "./docSnapshotObservable";

export function docDataObservable<T = DocumentData>(doc: FirebaseClientModule.firestore.DocumentReference<T>, options?: FirebaseClientModule.firestore.SnapshotOptions & FirebaseClientModule.firestore.SnapshotListenOptions): Observable<T>;

export function docDataObservable<T = DocumentData>(doc: FirebaseAdminModule.firestore.DocumentReference<T>): Observable<T>;

export function docDataObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<T>;

export function docDataObservable<T = DocumentData>(doc: DocumentReference<T>, options?: FirebaseClientModule.firestore.SnapshotOptions & FirebaseClientModule.firestore.SnapshotListenOptions): Observable<T> {

    if (DocumentReference.isClient(doc)) {
        return docSnapshotObservable(doc, options).pipe(map(snapshot => snapshot.data()));
    } else if (DocumentReference.isAdmin(doc)) {
        return docSnapshotObservable(doc).pipe(map(snapshot => snapshot.data()));
    } else {
        throw new Error("Invalid document reference");
    }
}
