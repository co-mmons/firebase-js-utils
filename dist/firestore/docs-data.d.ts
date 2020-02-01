import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { DocumentData } from "./types/shared";
export declare function docsData<T = DocumentData>(query: admin.Query<T>): Promise<T[]>;
export declare function docsData<T = DocumentData>(query: client.Query<T>, options?: client.GetOptions & client.SnapshotOptions): Promise<T[]>;
