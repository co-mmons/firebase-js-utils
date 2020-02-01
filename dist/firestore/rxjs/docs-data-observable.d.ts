import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdmin, firestoreClient } from "../types";
import { Query } from "../union-types";
export declare function docsDataObservable<T = DocumentData>(query: firestoreClient.Query<T>, options?: firestoreClient.SnapshotOptions & firestoreClient.SnapshotListenOptions): Observable<T[]>;
export declare function docsDataObservable<T = DocumentData>(query: firestoreAdmin.Query<T>): Observable<T[]>;
export declare function docsDataObservable<T = DocumentData>(query: Query<T>): Observable<T[]>;
