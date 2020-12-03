import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
import { DocumentData } from "./shared-types";
export declare abstract class DataConverter<T> implements FirebaseClientModule.firestore.FirestoreDataConverter<T>, FirebaseAdminModule.firestore.FirestoreDataConverter<T> {
    /**
     * Called by the Firestore SDK to convert a custom model object of type T
     * into a plain Javascript object (suitable for writing directly to the
     * Firestore database).
     *
     * @final
     */
    toFirestore(modelObject: T): DocumentData;
    abstract to(modelObject: T): DocumentData;
    /**
     * @final
     */
    fromFirestore(data: DocumentData): T;
    /**
     * Called by the Firestore SDK to convert Firestore data into an object of
     * type T. You can access your data by calling: `snapshot.data(options)`.
     *
     * @param snapshot A QueryDocumentSnapshot containing your data and metadata.
     * @param options The SnapshotOptions from the initial call to `data()`.
     * @final
     */
    fromFirestore(snapshot: FirebaseClientModule.firestore.QueryDocumentSnapshot, options: FirebaseClientModule.firestore.SnapshotOptions): T;
    abstract from(data: DocumentData): T;
}
