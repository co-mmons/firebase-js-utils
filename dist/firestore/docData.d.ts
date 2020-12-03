import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
import { DocumentData } from "./shared-types";
export declare function docData<T = DocumentData>(doc: FirebaseAdminModule.firestore.DocumentReference<T>): Promise<T>;
export declare function docData<T = DocumentData>(doc: FirebaseClientModule.firestore.DocumentReference<T>, options?: FirebaseClientModule.firestore.GetOptions & FirebaseClientModule.firestore.SnapshotOptions): Promise<T>;
