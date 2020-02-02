import * as admin from "@google-cloud/firestore";
import { DocumentData } from "./shared-types";
import { firestoreAdminTypes, firestoreClientTypes } from "./types";
export declare function docsSnapshots<T = DocumentData>(query: firestoreAdminTypes.Query<T>): Promise<Array<admin.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshots<T = DocumentData>(query: firestoreClientTypes.Query<T>, options?: firestoreClientTypes.GetOptions): Promise<Array<firestoreClientTypes.QueryDocumentSnapshot<T>>>;
