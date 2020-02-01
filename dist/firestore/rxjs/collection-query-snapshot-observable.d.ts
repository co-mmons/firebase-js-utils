import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { Observable } from "rxjs";
import { DocumentData } from "../shared-types";
export declare function querySnapshotObservable<T = DocumentData>(query: client.Query<T>): Observable<client.QuerySnapshot<T>>;
export declare function querySnapshotObservable<T = DocumentData>(query: admin.Query<T>): Observable<admin.QuerySnapshot<T>>;
export declare function collectionSnapshotObservable<T = DocumentData>(collection: client.CollectionReference<T>): Observable<client.QuerySnapshot>;
export declare function collectionSnapshotObservable<T = DocumentData>(collection: admin.CollectionReference<T>): Observable<admin.QuerySnapshot>;
