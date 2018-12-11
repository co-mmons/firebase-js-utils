import {AngularFirestore as AngularFireFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import firebase from "firebase/app";
import {first} from "rxjs/operators";
import {AbstractFirestore} from "../";
import {CollectionOrQueryWrapper} from "../collection-query-wrapper";
import {DocumentWrapper} from "../document-wrapper";
import {CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, GeoPointStatic, Query, TimestampStatic, Transaction, WriteBatch} from "../types";

export class CollectionOrQueryAngularWrapper extends CollectionOrQueryWrapper {

    constructor(firestore: AngularFirestore, private readonly collection: AngularFirestoreCollection, query?: Query) {
        super(firestore, collection.ref, query);
    }

    public readonly fakeFirestore: AngularFirestore;

    doc(documentPath?: string) {
        return new DocumentAngularWrapper(this.fakeFirestore, this.collection.doc(documentPath));
    }

    get(options?: any) {
        return this.fakeFirestore.realAngularFirestore.collection(this.collection.ref, () => <any>this.query).get(options).pipe(first()).toPromise();
    }

    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any): () => void {

        return this.fakeFirestore.realAngularFirestore.collection(this.collection.ref, () => <any>this.query).ref.onSnapshot(options, onNext, onError, onCompletion);
    }
}

export class DocumentAngularWrapper extends DocumentWrapper {

    constructor(firestore: AngularFirestore, private readonly doc: AngularFirestoreDocument) {
        super(firestore, doc.ref);
    }

    public readonly fakeFirestore: AngularFirestore;

    collection(collectionPath: string): CollectionReference {
        return new CollectionOrQueryAngularWrapper(this.fakeFirestore, this.doc.collection(collectionPath));
    }

    get(options?: any) {
        return this.doc.get(options).pipe(first()).toPromise();
    }

}

export class AngularFirestore extends AbstractFirestore {

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

    /**
     * Creates a write batch, used for performing multiple writes as a single
     * atomic operation.
     */
    batch(): WriteBatch {
        return this.realAngularFirestore.firestore.batch();
    }

    classTimestamp(): TimestampStatic {
        return firebase.firestore.Timestamp;
    }

    classGeoPoint(): GeoPointStatic {
        return firebase.firestore.GeoPoint;
    }

    classFieldValue(): FieldValueStatic {
        return firebase.firestore.FieldValue;
    }

    classFieldPath(): FieldPathStatic {
        return firebase.firestore.FieldPath;
    }
}