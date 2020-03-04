import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "../types";
import { DocumentReference } from "../union-types";
export declare function docDataObservable<T = DocumentData>(doc: firestoreClientModuleTypes.DocumentReference<T>, options?: firestoreClientModuleTypes.SnapshotOptions & firestoreClientModuleTypes.SnapshotListenOptions): Observable<T>;
export declare function docDataObservable<T = DocumentData>(doc: firestoreAdminModuleTypes.DocumentReference<T>): Observable<T>;
export declare function docDataObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<T>;
