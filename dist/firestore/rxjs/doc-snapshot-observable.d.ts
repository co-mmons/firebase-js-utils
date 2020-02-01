import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
import { firestoreAdmin, firestoreClient } from "../types";
import { DocumentReference } from "../union-types";
export declare function docSnapshotObservable<T = DocumentData>(doc: firestoreClient.DocumentReference<T>, options?: firestoreClient.SnapshotListenOptions): Observable<firestoreClient.DocumentSnapshot<T>>;
export declare function docSnapshotObservable<T = DocumentData>(doc: firestoreAdmin.DocumentReference<T>): Observable<firestoreAdmin.DocumentSnapshot<T>>;
export declare function docSnapshotObservable<T = DocumentData>(doc: DocumentReference<T>): Observable<firestoreClient.DocumentSnapshot<T> | firestoreAdmin.DocumentSnapshot<T>>;
