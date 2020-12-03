import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
export declare function docRef<T = any>(firestore: FirebaseClientModule.firestore.Firestore, path: string): FirebaseClientModule.firestore.DocumentReference<T>;
export declare function docRef<T = any>(firestore: FirebaseAdminModule.firestore.Firestore, path: string): FirebaseAdminModule.firestore.DocumentReference<T>;
