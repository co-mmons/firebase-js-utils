import * as admin from "@google-cloud/firestore";
import { DocumentData } from "./shared-types";
import { firestoreAdmin, firestoreClient } from "./types";
export declare function docsSnapshots<T = DocumentData>(query: firestoreAdmin.Query<T>): Promise<Array<admin.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshots<T = DocumentData>(query: firestoreClient.Query<T>, options?: firestoreClient.GetOptions): Promise<Array<firestoreClient.QueryDocumentSnapshot<T>>>;
