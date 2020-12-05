import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
export declare function collectionRef<T = any>(firestore: FirebaseClientModule.firestore.Firestore, path: string): FirebaseClientModule.firestore.CollectionReference<T>;
export declare function collectionRef<T = any>(firestore: FirebaseAdminModule.firestore.Firestore, path: string): FirebaseAdminModule.firestore.CollectionReference<T>;
