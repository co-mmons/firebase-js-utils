import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { Observable } from "rxjs";
import { DocumentData } from "../types/shared";
export declare function docSnapshotObservable<T = DocumentData>(doc: client.DocumentReference<T>, options?: client.SnapshotListenOptions): Observable<client.DocumentSnapshot<T>>;
export declare function docSnapshotObservable<T = DocumentData>(doc: admin.DocumentReference<T>): Observable<admin.DocumentSnapshot<T>>;
