import {AngularFirestore as AngularFireFirestore, AngularFirestoreCollection, AngularFirestoreDocument, SnapshotOptions} from "@angular/fire/firestore";
import {ArraySerializer} from "@co.mmons/js-utils/json";
import firebase from "firebase/app";
import {Observable, Subscription} from "rxjs";
import {first, map} from "rxjs/operators";
import {UniversalFirestore} from "../";
import {CollectionOrQueryWrapper} from "../collection-query-wrapper";
import {DocumentWrapper} from "../document-wrapper";
import {injectUniversalFirestoreRxjs} from "../rxjs";
import {SerializationOptions} from "../serialization-options";
import {TransactionWrapper} from "../transaction-wrapper";
import {CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, GeoPointStatic, GetOptions, Query, TimestampStatic, Transaction, WriteBatch} from "../types";
import {WriteBatchWrapper} from "../write-batch-wrapper";

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
        return new AngularFirestoreCollection(this.collection.ref, (this.query || this.collection.ref) as any, this.fakeFirestore.realAngularFirestore).get(options).pipe(first()).toPromise();
    }

    onSnapshot(...args: any[]): () => void {

        const options = args.length > 1 && typeof args[0] != "function" ? args[0] : undefined;

        const observable = new Observable<firebase.firestore.QuerySnapshot>(subscriber => {
            const unsubscribe = (this.query || this.ref).onSnapshot(options, subscriber);
            return {unsubscribe};
        });

        const scheduled = this.fakeFirestore.realAngularFirestore.scheduler.keepUnstableUntilFirst(this.fakeFirestore.realAngularFirestore.scheduler.runOutsideAngular(observable));

        let subscription: Subscription;

        if (args.length > 1 && typeof args[0] != "function") {
            if (typeof args[1] == "function") {
                subscription = scheduled.subscribe(args[1], args.length > 2 ? args[2] : undefined, args.length > 3 ? args[3] : undefined);
            } else {
                subscription = scheduled.subscribe(args[1]);
            }
        } else {
            subscription = scheduled.subscribe(...args);
        }

        return () => subscription.unsubscribe();
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
        return this.realAngularFirestore.firestore.runTransaction((transaction) => updateFunction(new TransactionWrapper(transaction)));
    }

    batch(): WriteBatch {
        return new WriteBatchWrapper(this.realAngularFirestore.firestore.batch());
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

        let ref: firebase.firestore.CollectionReference = collectionPathOrQuery instanceof CollectionOrQueryWrapper ? <any>collectionPathOrQuery.ref : collectionPathOrQuery as CollectionReference;
        let query: firebase.firestore.Query = collectionPathOrQuery instanceof CollectionOrQueryWrapper ? <any>collectionPathOrQuery["query"] : collectionPathOrQuery;

        return new AngularFirestoreCollection(ref, query || ref, this.realAngularFirestore).valueChanges().pipe(map(data => {

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
