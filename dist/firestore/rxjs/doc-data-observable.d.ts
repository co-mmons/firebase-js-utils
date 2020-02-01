import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdmin, firestoreClient } from "../types";
import { DocumentReference } from "../union-types";
export declare function docDataObservable<T = DocumentData>(doc: firestoreClient.DocumentReference<T>, options?: firestoreClient.SnapshotOptions & firestoreClient.SnapshotListenOptions): Observable<T>;
export declare function docDataObservable<T = DocumentData>(doc: firestoreAdmin.DocumentReference<T>): Observable<T>;
export declare function docDataObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<T>;
