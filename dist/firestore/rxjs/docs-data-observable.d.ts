import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "../types";
import { Query } from "../union-types";
export declare function docsDataObservable<T = DocumentData>(query: firestoreClientModuleTypes.Query<T>, options?: firestoreClientModuleTypes.SnapshotOptions & firestoreClientModuleTypes.SnapshotListenOptions): Observable<T[]>;
export declare function docsDataObservable<T = DocumentData>(query: firestoreAdminModuleTypes.Query<T>): Observable<T[]>;
export declare function docsDataObservable<T = DocumentData>(query: Query<T>): Observable<T[]>;
