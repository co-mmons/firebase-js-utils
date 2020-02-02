import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdminTypes, firestoreClientTypes } from "../types";
import { DocumentReference } from "../union-types";
export declare function docDataObservable<T = DocumentData>(doc: firestoreClientTypes.DocumentReference<T>, options?: firestoreClientTypes.SnapshotOptions & firestoreClientTypes.SnapshotListenOptions): Observable<T>;
export declare function docDataObservable<T = DocumentData>(doc: firestoreAdminTypes.DocumentReference<T>): Observable<T>;
export declare function docDataObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<T>;
