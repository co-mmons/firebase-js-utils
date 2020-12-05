import { Observable } from "rxjs";
import { FirebaseAdminModule } from "../../FirebaseAdminModule";
import { FirebaseClientModule } from "../../FirebaseClientModule";
import { DocumentData } from "../shared-types";
import { DocumentReference } from "../union-types";
export declare function docSnapshotObservable<T = DocumentData>(doc: FirebaseClientModule.firestore.DocumentReference<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<FirebaseClientModule.firestore.DocumentSnapshot<T>>;
export declare function docSnapshotObservable<T = DocumentData>(doc: FirebaseAdminModule.firestore.DocumentReference<T>): Observable<FirebaseAdminModule.firestore.DocumentSnapshot<T>>;
export declare function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<FirebaseClientModule.firestore.DocumentSnapshot<T> | FirebaseAdminModule.firestore.DocumentSnapshot<T>>;
