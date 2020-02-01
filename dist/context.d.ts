import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import { AuthUser } from "./auth";
export interface FirebaseContext {
    firestore?: client.FirebaseFirestore | admin.Firestore;
    authUser?: AuthUser;
    functionUrl?: (name: string) => string;
}
export interface FirebaseContextFirestore<Firestore extends client.FirebaseFirestore | admin.Firestore> {
    firestore?: Firestore;
}
