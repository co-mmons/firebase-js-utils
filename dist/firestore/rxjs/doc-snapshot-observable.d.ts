import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdminTypes, firestoreClientTypes } from "../types";
import { DocumentReference } from "../union-types";
export declare function docSnapshotObservable<T = DocumentData>(doc: firestoreClientTypes.DocumentReference<T>, options?: firestoreClientTypes.SnapshotListenOptions): Observable<firestoreClientTypes.DocumentSnapshot<T>>;
export declare function docSnapshotObservable<T = DocumentData>(doc: firestoreAdminTypes.DocumentReference<T>): Observable<firestoreAdminTypes.DocumentSnapshot<T>>;
export declare function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<firestoreClientTypes.DocumentSnapshot<T> | firestoreAdminTypes.DocumentSnapshot<T>>;
