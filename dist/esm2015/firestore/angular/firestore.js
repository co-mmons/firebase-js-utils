import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { ArraySerializer } from "@co.mmons/js-utils/json";
import firebase from "firebase/app";
import { Observable } from "rxjs";
import { first, map } from "rxjs/operators";
import { UniversalFirestore } from "../";
import { CollectionOrQueryWrapper } from "../collection-query-wrapper";
import { DocumentWrapper } from "../document-wrapper";
import { injectUniversalFirestoreRxjs } from "../rxjs";
import { TransactionWrapper } from "../transaction-wrapper";
import { WriteBatchWrapper } from "../write-batch-wrapper";
injectUniversalFirestoreRxjs();
export class CollectionOrQueryAngularWrapper extends CollectionOrQueryWrapper {
    constructor(firestore, collection, query) {
        super(firestore, collection.ref, query);
        this.collection = collection;
    }
    mutate(query) {
        return new CollectionOrQueryAngularWrapper(this.fakeFirestore, this.collection, query);
    }
    doc(documentPath) {
        return new DocumentAngularWrapper(this.fakeFirestore, this.collection.doc(documentPath ? documentPath : this.fakeFirestore.createId()));
    }
    get(options) {
        return new AngularFirestoreCollection(this.collection.ref, (this.query || this.collection.ref), this.fakeFirestore.firestore).get(options).pipe(first()).toPromise();
    }
    onSnapshot(...args) {
        const options = args.length > 1 && typeof args[0] != "function" ? args[0] : undefined;
        const observable = new Observable(subscriber => {
            const unsubscribe = (this.query || this.ref).onSnapshot(options, subscriber);
            return { unsubscribe };
        });
        const scheduled = this.fakeFirestore.firestore.scheduler.keepUnstableUntilFirst(this.fakeFirestore.firestore.scheduler.runOutsideAngular(observable));
        let subscription;
        if (args.length > 1 && typeof args[0] != "function") {
            if (typeof args[1] == "function") {
                subscription = scheduled.subscribe(args[1], args.length > 2 ? args[2] : undefined, args.length > 3 ? args[3] : undefined);
            }
            else {
                subscription = scheduled.subscribe(args[1]);
            }
        }
        else {
            subscription = scheduled.subscribe(...args);
        }
        return () => subscription.unsubscribe();
    }
}
export class DocumentAngularWrapper extends DocumentWrapper {
    constructor(firestore, doc) {
        super(firestore, doc.ref);
        this.doc = doc;
    }
    collection(collectionPath) {
        return new CollectionOrQueryAngularWrapper(this.fakeFirestore, this.doc.collection(collectionPath));
    }
    get(options) {
        return this.doc.get(options).pipe(first()).toPromise();
    }
}
export class UniversalFirestoreAngularImpl extends UniversalFirestore {
    constructor(firestore) {
        super();
        this.firestore = firestore;
    }
    collection(collectionPath) {
        return new CollectionOrQueryAngularWrapper(this, this.firestore.collection(collectionPath));
    }
    doc(documentPath) {
        return new DocumentAngularWrapper(this, this.firestore.doc(documentPath));
    }
    runTransaction(updateFunction) {
        return this.firestore.firestore.runTransaction((transaction) => updateFunction(new TransactionWrapper(transaction)));
    }
    batch() {
        return new WriteBatchWrapper(this.firestore.firestore.batch());
    }
    createId() {
        return this.firestore.createId();
    }
    docsDataObservable(collectionPathOrQuery, options) {
        if (typeof collectionPathOrQuery == "string") {
            return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
        }
        if (!collectionPathOrQuery["path"]) {
            throw new Error("Not supported object: " + collectionPathOrQuery);
        }
        let ref = collectionPathOrQuery instanceof CollectionOrQueryWrapper ? collectionPathOrQuery.ref : collectionPathOrQuery;
        let query = collectionPathOrQuery instanceof CollectionOrQueryWrapper ? collectionPathOrQuery["query"] : collectionPathOrQuery;
        return new AngularFirestoreCollection(ref, query || ref, this.firestore).valueChanges().pipe(map(data => {
            if (options && options.serializer) {
                return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
            }
            return data;
        }));
    }
    docDataObservable(doc, options) {
        if (typeof doc == "string") {
            return this.docDataObservable(this.doc(doc), options);
        }
        return this.firestore.doc(doc.path).valueChanges().pipe(map(data => {
            if (options && options.serializer) {
                return this.unserialize(data, options.serializer, options.serializationOptions);
            }
            return data;
        }));
    }
    get Timestamp() {
        return firebase.firestore.Timestamp;
    }
    get GeoPoint() {
        return firebase.firestore.GeoPoint;
    }
    get FieldValue() {
        return firebase.firestore.FieldValue;
    }
    get FieldPath() {
        return firebase.firestore.FieldPath;
    }
}
//# sourceMappingURL=firestore.js.map