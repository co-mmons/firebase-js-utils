import {FirebaseAdminModule} from "../FirebaseAdminModule";
import {FirebaseClientModule} from "../FirebaseClientModule";
import {DocumentReference, Firestore} from "./union-types";

export function docRef<T = any>(firestore: FirebaseClientModule.firestore.Firestore, path: string): FirebaseClientModule.firestore.DocumentReference<T>;

export function docRef<T = any>(firestore: FirebaseAdminModule.firestore.Firestore, path: string): FirebaseAdminModule.firestore.DocumentReference<T>;

export function docRef<T = any>(firestore: Firestore, path: string): DocumentReference<T> {
    return firestore.doc(path) as DocumentReference<T>;
}