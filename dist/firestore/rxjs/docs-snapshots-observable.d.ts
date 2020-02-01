import { Observable } from "rxjs";
import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { DocumentData } from "../types/shared";
export declare function docsSnapshotsObservable<T = DocumentData>(query: client.Query<T>, options?: client.SnapshotListenOptions): Observable<Array<client.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshotsObservable<T = DocumentData>(query: admin.Query<T>): Observable<Array<admin.QueryDocumentSnapshot<T>>>;
