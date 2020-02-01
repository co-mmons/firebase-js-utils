import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdmin, firestoreClient } from "../types";
import { Query } from "../union-types";
export declare function docsSnapshotsObservable<T = DocumentData>(query: firestoreClient.Query<T>, options?: firestoreClient.SnapshotListenOptions): Observable<Array<firestoreClient.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshotsObservable<T = DocumentData>(query: firestoreAdmin.Query<T>): Observable<Array<firestoreAdmin.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshotsObservable<T = DocumentData>(query: Query<T>): Observable<Array<firestoreClient.QueryDocumentSnapshot<T> | firestoreAdmin.QueryDocumentSnapshot<T>>>;
