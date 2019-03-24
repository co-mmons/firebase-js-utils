import { Type } from "@co.mmons/js-utils/core";
import { SerializationOptions, Serializer } from "@co.mmons/js-utils/json";
import { CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, FirebaseFirestore, GeoPointStatic, GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions, TimestampStatic, Transaction, WriteBatch } from "./types";
export declare abstract class UniversalFirestore implements FirebaseFirestore {
    /**
     * Gets a `CollectionReference` instance that refers to the collection at
     * the specified path.
     *
     * @param collectionPath A slash-separated path to a collection.
     * @return The `CollectionReference` instance.
     */
    abstract collection(collectionPath: string): CollectionReference;
    /**
     * Gets a `DocumentReference` instance that refers to the document at the
     * specified path.
     *
     * @param documentPath A slash-separated path to a document.
     * @return The `DocumentReference` instance.
     */
    abstract doc(documentPath: string): DocumentReference;
    /**
     * Executes the given updateFunction and then attempts to commit the
     * changes applied within the transaction. If any document read within the
     * transaction has changed, the updateFunction will be retried. If it fails
     * to commit after 5 attempts, the transaction will fail.
     *
     * @param updateFunction The function to execute within the transaction
     * context.
     * @return If the transaction completed successfully or was explicitly
     * aborted (by the updateFunction returning a failed Promise), the Promise
     * returned by the updateFunction will be returned here. Else if the
     * transaction failed, a rejected Promise with the corresponding failure
     * error will be returned.
     */
    abstract runTransaction<T>(updateFunction: (transaction: Transaction) => Promise<T>): Promise<T>;
    /**
     * Creates a write batch, used for performing multiple writes as a single
     * atomic operation.
     */
    abstract batch(): WriteBatch;
    abstract readonly Timestamp: TimestampStatic;
    abstract readonly GeoPoint: GeoPointStatic;
    abstract readonly FieldValue: FieldValueStatic;
    abstract readonly FieldPath: FieldPathStatic;
    /**
     * Creates new, randomly generated id.s
     */
    createId(): string;
    serialize(data: any, options?: SerializationOptions & {
        level?: number;
    }): any;
    unserialize(json: any, targetClassOrSerializer: Type<any> | Serializer, options?: SerializationOptions): any;
    docData<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V>;
    docsData<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V[]>;
    docsSnapshots(collectionPathOrQuery: string | Query, options?: GetOptions): Promise<QueryDocumentSnapshot[]>;
    deleteQuery(query: firebase.firestore.Query, batchSize?: number): Promise<number>;
}
