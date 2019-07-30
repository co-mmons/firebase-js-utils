import { AngularFirestore as AngularFireFirestore, AngularFirestoreCollection, AngularFirestoreDocument, SnapshotOptions } from "@angular/fire/firestore";
import firebase from "firebase/app";
import { Observable } from "rxjs";
import { UniversalFirestore } from "../";
import { CollectionOrQueryWrapper } from "../collection-query-wrapper";
import { DocumentWrapper } from "../document-wrapper";
import { SerializationOptions } from "../serialization-options";
import { CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, GeoPointStatic, GetOptions, Query, TimestampStatic, Transaction, WriteBatch } from "../types";
export declare class CollectionOrQueryAngularWrapper extends CollectionOrQueryWrapper {
    private readonly collection;
    constructor(firestore: UniversalFirestoreAngularImpl, collection: AngularFirestoreCollection, query?: Query);
    readonly fakeFirestore: UniversalFirestoreAngularImpl;
    protected mutate(query?: Query): CollectionOrQueryAngularWrapper;
    doc(documentPath?: string): DocumentAngularWrapper;
    get(options?: any): Promise<firebase.firestore.QuerySnapshot>;
    onSnapshot(...args: any[]): () => void;
}
export declare class DocumentAngularWrapper extends DocumentWrapper {
    private readonly doc;
    constructor(firestore: UniversalFirestoreAngularImpl, doc: AngularFirestoreDocument);
    readonly fakeFirestore: UniversalFirestoreAngularImpl;
    collection(collectionPath: string): CollectionReference;
    get(options?: any): Promise<firebase.firestore.DocumentSnapshot>;
}
export declare class UniversalFirestoreAngularImpl extends UniversalFirestore<AngularFireFirestore> {
    readonly firestore: AngularFireFirestore;
    constructor(firestore: AngularFireFirestore);
    collection(collectionPath: string): CollectionReference;
    doc(documentPath: string): DocumentReference;
    runTransaction<T>(updateFunction: (transaction: Transaction) => Promise<T>): Promise<T>;
    batch(): WriteBatch;
    createId(): string;
    docsDataObservable<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V[]>;
    docDataObservable<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V>;
    readonly Timestamp: TimestampStatic;
    readonly GeoPoint: GeoPointStatic;
    readonly FieldValue: FieldValueStatic;
    readonly FieldPath: FieldPathStatic;
}
