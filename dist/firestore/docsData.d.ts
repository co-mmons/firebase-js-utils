import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
import { DocumentData } from "./shared-types";
export declare function docsData<T = DocumentData>(query: FirebaseAdminModule.firestore.Query<T>): Promise<T[]>;
export declare function docsData<T = DocumentData>(query: FirebaseClientModule.firestore.Query<T>, options?: FirebaseClientModule.firestore.GetOptions & FirebaseClientModule.firestore.SnapshotOptions): Promise<T[]>;
