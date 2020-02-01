import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { DocumentData } from "./shared-types";
export declare type Firestore = client.FirebaseFirestore | admin.Firestore;
export declare type DocumentReference<T = DocumentData> = client.DocumentReference<T> | admin.DocumentReference<T>;
