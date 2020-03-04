import { AuthUser } from "./auth";
import { Firestore } from "./firestore";
export interface FirebaseContext {
    firestore?: Firestore;
    authUser?: AuthUser;
    functionUrl?: (name: string) => string;
}
export interface FirebaseContextFirestore<FirestoreImpl extends Firestore> {
    firestore?: FirestoreImpl;
}
