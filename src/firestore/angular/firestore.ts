import {AngularFirestore as AngularFireFirestore, AngularFirestoreCollection, AngularFirestoreDocument, SnapshotOptions} from "@angular/fire/firestore";
import {ArraySerializer} from "@co.mmons/js-utils/json";
import firebase from "firebase/app";
import {Observable} from "rxjs";
import {first, map} from "rxjs/operators";
import {UniversalFirestore} from "../";
import {CollectionOrQueryWrapper} from "../collection-query-wrapper";
import {DocumentWrapper} from "../document-wrapper";
import {injectUniversalFirestoreRxjs} from "../rxjs";
import {SerializationOptions} from "../serialization-options";
import {CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, GeoPointStatic, GetOptions, Query, TimestampStatic, Transaction, WriteBatch} from "../types";

injectUniversalFirestoreRxjs();

export class CollectionOrQueryAngularWrapper extends CollectionOrQueryWrapper {

    constructor(firestore: UniversalFirestoreAngularImpl, private readonly collection: AngularFirestoreCollection, query?: Query) {
        super(firestore, collection.ref, query);
    }

    public readonly fakeFirestore: UniversalFirestoreAngularImpl;

    protected mutate(query?: Query) {
        return new CollectionOrQueryAngularWrapper(this.fakeFirestore, this.collection, query);
    }

    doc(documentPath?: string) {
        return new DocumentAngularWrapper(this.fakeFirestore, this.collection.doc(documentPath ? documentPath : this.fakeFirestore.createId()));
    }

    get(options?: any) {
        return this.fakeFirestore.realAngularFirestore.collection(this.collection.ref, () => <any>this.query).get(options).pipe(first()).toPromise();
    }

    onSnapshot(...args: any[]): () => void {
        //@ts-ignore
        return this.fakeFirestore.realAngularFirestore.collection(this.collection.ref, () => <any>this.query).ref.onSnapshot(...args);
    }
}

export class DocumentAngularWrapper extends DocumentWrapper {

    constructor(firestore: UniversalFirestoreAngularImpl, private readonly doc: AngularFirestoreDocument) {
        super(firestore, doc.ref);
    }

    public readonly fakeFirestore: UniversalFirestoreAngularImpl;

    collection(collectionPath: string): CollectionReference {
        return new CollectionOrQueryAngularWrapper(this.fakeFirestore, this.doc.collection(collectionPath));
    }

    get(options?: any) {
        return this.doc.get(options).pipe(first()).toPromise();
    }

}

export class UniversalFirestoreAngularImpl extends UniversalFirestore {

    constructor(public readonly realAngularFirestore: AngularFireFirestore) {
        super();
    }

    collection(collectionPath: string): CollectionReference {
        return new CollectionOrQueryAngularWrapper(this, this.realAngularFirestore.collection(collectionPath));
    }

    doc(documentPath: string): DocumentReference {
        return new DocumentAngularWrapper(this, this.realAngularFirestore.doc(documentPath));
    }

    runTransaction<T>(updateFunction: (transaction: Transaction) => Promise<T>): Promise<T> {
        return this.realAngularFirestore.firestore.runTransaction(updateFunction);
    }

    batch(): WriteBatch {
        return this.realAngularFirestore.firestore.batch();
    }

    createId(): string {
        return this.realAngularFirestore.createId();
    }

    docsDataObservable<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V[]> {

        if (typeof collectionPathOrQuery == "string") {
            return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
        }

        if (!collectionPathOrQuery["path"]) {
            throw new Error("Not supported object: " + collectionPathOrQuery);
        }

        return this.realAngularFirestore.collection(collectionPathOrQuery["path"], () => <any>collectionPathOrQuery).valueChanges().pipe(map(data => {

            if (options && options.serializer) {
                return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
            }

            return data;
        }));
    }

    docDataObservable<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V> {

        if (typeof doc == "string") {
            return this.docDataObservable(this.doc(doc), options);
        }

        return this.realAngularFirestore.doc(doc.path).valueChanges().pipe(map(data => {

            if (options && options.serializer) {
                return this.unserialize(data, options.serializer, options.serializationOptions);
            }

            return data;

        }));
    }

    get Timestamp(): TimestampStatic {
        return firebase.firestore.Timestamp;
    }

    get GeoPoint(): GeoPointStatic {
        return firebase.firestore.GeoPoint;
    }

    get FieldValue(): FieldValueStatic {
        return firebase.firestore.FieldValue;
    }

    get FieldPath(): FieldPathStatic {
        return firebase.firestore.FieldPath;
    }
}