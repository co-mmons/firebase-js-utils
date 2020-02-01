import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { Observable } from "rxjs";
import { DocumentData } from "../types/shared";
export declare function docsDataObservable<T = DocumentData>(query: client.Query<T>, options?: client.SnapshotOptions & client.SnapshotListenOptions): Observable<T[]>;
export declare function docsDataObservable<T = DocumentData>(query: admin.Query<T>): Observable<T[]>;
