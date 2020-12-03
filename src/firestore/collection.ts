import {FirebaseAdminModule} from "../FirebaseAdminModule";
import {FirebaseClientModule} from "../FirebaseClientModule";
import {CollectionReference, Firestore} from "./union-types";

export function collection<T = any>(firestore: FirebaseClientModule.firestore.Firestore, path: string): FirebaseClientModule.firestore.CollectionReference<T>;

export function collection<T = any>(firestore: FirebaseAdminModule.firestore.Firestore, path: string): FirebaseAdminModule.firestore.CollectionReference<T>;

export function collection<T = any>(firestore: Firestore, path: string): CollectionReference<T> {
    return firestore.collection(path) as CollectionReference<T>;
}