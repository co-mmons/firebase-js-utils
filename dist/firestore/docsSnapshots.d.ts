import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
import { DocumentData } from "./shared-types";
export declare function docsSnapshots<T = DocumentData>(query: FirebaseAdminModule.firestore.Query<T>): Promise<Array<FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>>>;
export declare function docsSnapshots<T = DocumentData>(query: FirebaseClientModule.firestore.Query<T>, options?: FirebaseClientModule.firestore.GetOptions): Promise<Array<FirebaseClientModule.firestore.QueryDocumentSnapshot<T>>>;
