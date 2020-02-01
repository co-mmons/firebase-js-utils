import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { DocumentData } from "./types/shared";
export declare function docsSnapshots<T = DocumentData>(query: admin.Query<T>): Promise<Array<admin.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshots<T = DocumentData>(query: client.Query<T>, options?: client.GetOptions): Promise<Array<client.QueryDocumentSnapshot<T>>>;
