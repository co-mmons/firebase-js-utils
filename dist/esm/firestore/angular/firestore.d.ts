import { AngularFirestore as AngularFireFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import firebase from "firebase/app";
import { UniversalFirestore } from "../";
import { CollectionOrQueryWrapper } from "../collection-query-wrapper";
import { DocumentWrapper } from "../document-wrapper";
import { CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, GeoPointStatic, Query, TimestampStatic, Transaction, WriteBatch } from "../types";
export declare class CollectionOrQueryAngularWrapper extends CollectionOrQueryWrapper {
    private readonly collection;
    constructor(firestore: UniversalFirestoreAngularImpl, collection: AngularFirestoreCollection, query?: Query);
    readonly fakeFirestore: UniversalFirestoreAngularImpl;
    doc(documentPath?: string): DocumentAngularWrapper;
    get(options?: any): Promise<firebase.firestore.QuerySnapshot>;
    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any): () => void;
}
export declare class DocumentAngularWrapper extends DocumentWrapper {
    private readonly doc;
    constructor(firestore: UniversalFirestoreAngularImpl, doc: AngularFirestoreDocument);
    readonly fakeFirestore: UniversalFirestoreAngularImpl;
    collection(collectionPath: string): CollectionReference;
    get(options?: any): Promise<firebase.firestore.DocumentSnapshot>;
}
export declare class UniversalFirestoreAngularImpl extends UniversalFirestore {
    readonly realAngularFirestore: AngularFireFirestore;
    constructor(realAngularFirestore: AngularFireFirestore);
    collection(collectionPath: string): CollectionReference;
    doc(documentPath: string): DocumentReference;
    runTransaction<T>(updateFunction: (transaction: Transaction) => Promise<T>): Promise<T>;
    /**
     * Creates a write batch, used for performing multiple writes as a single
     * atomic operation.
     */
    batch(): WriteBatch;
    readonly Timestamp: TimestampStatic;
    readonly GeoPoint: GeoPointStatic;
    readonly FieldValue: FieldValueStatic;
    readonly FieldPath: FieldPathStatic;
}
