import { Observable } from "rxjs";
import { FirebaseAdminModule } from "../../FirebaseAdminModule";
import { FirebaseClientModule } from "../../FirebaseClientModule";
import { DocumentData } from "../shared-types";
import { Query } from "../union-types";
export declare function docsDataObservable<T = DocumentData>(query: FirebaseClientModule.firestore.Query<T>, options?: FirebaseClientModule.firestore.SnapshotOptions & FirebaseClientModule.firestore.SnapshotListenOptions): Observable<T[]>;
export declare function docsDataObservable<T = DocumentData>(query: FirebaseAdminModule.firestore.Query<T>): Observable<T[]>;
export declare function docsDataObservable<T = DocumentData>(query: Query<T>): Observable<T[]>;
