import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "../types";
import { DocumentReference } from "../union-types";
export declare function docSnapshotObservable<T = DocumentData>(doc: firestoreClientModuleTypes.DocumentReference<T>, options?: firestoreClientModuleTypes.SnapshotListenOptions): Observable<firestoreClientModuleTypes.DocumentSnapshot<T>>;
export declare function docSnapshotObservable<T = DocumentData>(doc: firestoreAdminModuleTypes.DocumentReference<T>): Observable<firestoreAdminModuleTypes.DocumentSnapshot<T>>;
export declare function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<firestoreClientModuleTypes.DocumentSnapshot<T> | firestoreAdminModuleTypes.DocumentSnapshot<T>>;
