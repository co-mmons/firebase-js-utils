import {Observable} from "rxjs";
import {FirebaseAdminModule} from "../../FirebaseAdminModule";
import {FirebaseClientModule} from "../../FirebaseClientModule";
import {extractSnapshotListenOptions} from "../client/extractSnapshotListenOptions";
import {DocumentData} from "../shared-types";
import {DocumentReference} from "../union-types";

export function docSnapshotObservable<T = DocumentData>(doc: FirebaseClientModule.firestore.DocumentReference<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<FirebaseClientModule.firestore.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: FirebaseAdminModule.firestore.DocumentReference<T>): Observable<FirebaseAdminModule.firestore.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<FirebaseClientModule.firestore.DocumentSnapshot<T> | FirebaseAdminModule.firestore.DocumentSnapshot<T>>;

export function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<FirebaseClientModule.firestore.DocumentSnapshot<T> | FirebaseAdminModule.firestore.DocumentSnapshot<T>> {

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
