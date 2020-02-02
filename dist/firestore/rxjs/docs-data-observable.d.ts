import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdminTypes, firestoreClientTypes } from "../types";
import { Query } from "../union-types";
export declare function docsDataObservable<T = DocumentData>(query: firestoreClientTypes.Query<T>, options?: firestoreClientTypes.SnapshotOptions & firestoreClientTypes.SnapshotListenOptions): Observable<T[]>;
export declare function docsDataObservable<T = DocumentData>(query: firestoreAdminTypes.Query<T>): Observable<T[]>;
export declare function docsDataObservable<T = DocumentData>(query: Query<T>): Observable<T[]>;
