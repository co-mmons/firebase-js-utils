import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdminTypes, firestoreClientTypes } from "../types";
import { Query } from "../union-types";
export declare function docsSnapshotsObservable<T = DocumentData>(query: firestoreClientTypes.Query<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<Array<firestoreClientTypes.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshotsObservable<T = DocumentData>(query: firestoreAdminTypes.Query<T>): Observable<Array<firestoreAdminTypes.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshotsObservable<T = DocumentData>(query: Query<T>): Observable<Array<firestoreClientTypes.QueryDocumentSnapshot<T> | firestoreAdminTypes.QueryDocumentSnapshot<T>>>;
