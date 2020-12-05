import { Observable } from "rxjs";
import { FirebaseAdminModule } from "../../FirebaseAdminModule";
import { FirebaseClientModule } from "../../FirebaseClientModule";
import { DocumentData } from "../shared-types";
import { Query } from "../union-types";
export declare function docsSnapshotsObservable<T = DocumentData>(query: FirebaseClientModule.firestore.Query<T>, options?: FirebaseClientModule.firestore.SnapshotListenOptions): Observable<Array<FirebaseClientModule.firestore.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshotsObservable<T = DocumentData>(query: FirebaseAdminModule.firestore.Query<T>): Observable<Array<FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshotsObservable<T = DocumentData>(query: Query<T>): Observable<Array<FirebaseClientModule.firestore.QueryDocumentSnapshot<T> | FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>>>;
