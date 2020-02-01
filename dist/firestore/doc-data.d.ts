import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { DocumentData } from "./types/shared";
export declare function docData<T = DocumentData>(doc: admin.DocumentReference<T>): Promise<T>;
export declare function docData<T = DocumentData>(doc: client.DocumentReference<T>, options?: client.GetOptions & client.SnapshotOptions): Promise<T>;
