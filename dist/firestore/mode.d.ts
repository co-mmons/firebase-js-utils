import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
export declare function isFirestoreClient(): boolean;
export declare function firestoreClientModule(): typeof FirebaseClientModule.firestore;
export declare function isFirestoreAdmin(): boolean;
export declare function firestoreAdminModule(): typeof FirebaseAdminModule.firestore;
export declare function firestoreModule(): typeof FirebaseClientModule.firestore | typeof FirebaseAdminModule.firestore;
