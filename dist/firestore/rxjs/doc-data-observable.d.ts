import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { Observable } from "rxjs";
import { DocumentData } from "../types/shared";
export declare function docDataObservable<T = DocumentData>(doc: client.DocumentReference<T>, options?: client.SnapshotOptions & client.SnapshotListenOptions): Observable<T>;
export declare function docDataObservable<T = DocumentData>(doc: admin.DocumentReference<T>): Observable<T>;
