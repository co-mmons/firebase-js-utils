import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "../types";
import { Query } from "../union-types";
export declare function docsSnapshotsObservable<T = DocumentData>(query: firestoreClientModuleTypes.Query<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<Array<firestoreClientModuleTypes.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshotsObservable<T = DocumentData>(query: firestoreAdminModuleTypes.Query<T>): Observable<Array<firestoreAdminModuleTypes.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshotsObservable<T = DocumentData>(query: Query<T>): Observable<Array<firestoreClientModuleTypes.QueryDocumentSnapshot<T> | firestoreAdminModuleTypes.QueryDocumentSnapshot<T>>>;
