import {Observable} from "rxjs";
import {extractSnapshotListenOptions} from "../client/extract-snapshot-listen-options";
import {DocumentData} from "../shared-types";
import {firestoreAdminModuleTypes, firestoreClientModuleTypes} from "../types";
import {DocumentReference} from "../union-types";

export function docSnapshotObservable<T = DocumentData>(doc: firestoreClientModuleTypes.DocumentReference<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<firestoreClientModuleTypes.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: firestoreAdminModuleTypes.DocumentReference<T>): Observable<firestoreAdminModuleTypes.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<firestoreClientModuleTypes.DocumentSnapshot<T> | firestoreAdminModuleTypes.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<firestoreClientModuleTypes.DocumentSnapshot<T> | firestoreAdminModuleTypes.DocumentSnapshot<T>> {

    return new Observable(subscriber => {

        if (DocumentReference.isClient(doc)) {
            const unsubscribe = doc.onSnapshot(extractSnapshotListenOptions(options) || {}, snapshot => subscriber.next(snapshot as any), error => subscriber.error(error));
            return () => unsubscribe();
        } else if (DocumentReference.isAdmin(doc)) {
            const unsubscribe = doc.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }

    });

}
