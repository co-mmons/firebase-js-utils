import {sleep, Type} from "@co.mmons/js-utils/core";
import {ArraySerializer, SerializationOptions, serialize, Serializer, unserialize} from "@co.mmons/js-utils/json";
import {extractGetOptions} from "./extract-get-options";
import {extractSnapshotOptions} from "./extract-snapshot-options";
import {CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, FirebaseFirestore, GeoPointStatic, GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions, TimestampStatic, Transaction, WriteBatch} from "./types";

export abstract class UniversalFirestore implements FirebaseFirestore {

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
    abstract runTransaction<T>(
        updateFunction: (transaction: Transaction) => Promise<T>
    ): Promise<T>;

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
    createId(): string {
        return this.collection("_").doc().id;
    }

    serialize(data: any, options?: SerializationOptions & {level?: number}) {
        return serialize(data, options);
    }

    unserialize(json: any, targetClassOrSerializer: Type<any> | Serializer, options?: SerializationOptions) {

        if (targetClassOrSerializer instanceof Serializer) {
            return targetClassOrSerializer.unserialize(json);
        }

        return unserialize(json, targetClassOrSerializer, options);
    }
    
    async docData<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V> {
        
        if (typeof doc == "string") {
            return this.docData<V>(this.doc(doc), options);
        }

        let data = (await doc.get(extractGetOptions(options))).data(extractSnapshotOptions(options));

        if (options && options.serializer) {
            return this.unserialize(data, options.serializer, options.serializationOptions);
        }

        return data as V;
    }

    async docsData<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V[]> {
        let data: V[] = [];

        for (let d of (await this.docsSnapshots(collectionPathOrQuery, options))) {
            data.push(d.data(extractSnapshotOptions(options)) as V);
        }

        if (options && options.serializer) {
            return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
        }

        return data;
       
    }

    async docsSnapshots(collectionPathOrQuery: string | Query, options?: GetOptions): Promise<QueryDocumentSnapshot[]> {
        if (typeof collectionPathOrQuery == "string") {
            return this.docsSnapshots(this.collection(collectionPathOrQuery), options);
        }

        return (await collectionPathOrQuery.get(extractGetOptions(options))).docs;        
    }

    async deleteQuery(query: firebase.firestore.Query, batchSize?: number): Promise<number> {

        if (batchSize < 1) {
            batchSize = 400;
        }

        const snapshot = await query.get();

        // when there are no documents left, we are done
        if (snapshot.size == 0) {
            return 0;
        }

        const batch = this.batch();

        for (const doc of snapshot.docs) {
            batch.delete(doc.ref);
        }

        await batch.commit();

        if (snapshot.size <= batchSize) {
            return snapshot.size;
        }

        await sleep(50);

        return snapshot.size + (await this.deleteQuery(query, batchSize));
    }

}
