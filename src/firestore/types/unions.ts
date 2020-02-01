import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {DocumentData} from "./shared";

export type Firestore = client.FirebaseFirestore | admin.Firestore;

export type DocumentReference<T = DocumentData> = client.DocumentReference<T> | admin.DocumentReference<T>;
