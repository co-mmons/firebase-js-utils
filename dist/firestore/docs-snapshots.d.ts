import * as admin from "@google-cloud/firestore";
import { DocumentData } from "./shared-types";
import { firestoreAdminModuleTypes, firestoreClientModuleTypes } from "./types";
export declare function docsSnapshots<T = DocumentData>(query: firestoreAdminModuleTypes.Query<T>): Promise<Array<admin.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshots<T = DocumentData>(query: firestoreClientModuleTypes.Query<T>, options?: firestoreClientModuleTypes.GetOptions): Promise<Array<firestoreClientModuleTypes.QueryDocumentSnapshot<T>>>;
