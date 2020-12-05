import { Observable } from "rxjs";
import { FirebaseAdminModule } from "../../FirebaseAdminModule";
import { FirebaseClientModule } from "../../FirebaseClientModule";
import { DocumentData } from "../shared-types";
import { DocumentReference } from "../union-types";
export declare function docDataObservable<T = DocumentData>(doc: FirebaseClientModule.firestore.DocumentReference<T>, options?: FirebaseClientModule.firestore.SnapshotOptions & FirebaseClientModule.firestore.SnapshotListenOptions): Observable<T>;
export declare function docDataObservable<T = DocumentData>(doc: FirebaseAdminModule.firestore.DocumentReference<T>): Observable<T>;
export declare function docDataObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<T>;
