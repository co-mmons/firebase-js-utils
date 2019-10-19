"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("@angular/fire/firestore");
const json_1 = require("@co.mmons/js-utils/json");
const app_1 = require("firebase/app");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const __1 = require("../");
const collection_query_wrapper_1 = require("../collection-query-wrapper");
const document_wrapper_1 = require("../document-wrapper");
const rxjs_2 = require("../rxjs");
const transaction_wrapper_1 = require("../transaction-wrapper");
const write_batch_wrapper_1 = require("../write-batch-wrapper");
rxjs_2.injectUniversalFirestoreRxjs();
class CollectionOrQueryAngularWrapper extends collection_query_wrapper_1.CollectionOrQueryWrapper {
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
        return new firestore_1.AngularFirestoreCollection(this.collection.ref, (this.query || this.collection.ref), this.fakeFirestore.firestore).get(options).pipe(operators_1.first()).toPromise();
    }
    onSnapshot(...args) {
        const options = args.length > 1 && typeof args[0] != "function" ? args[0] : undefined;
        const observable = new rxjs_1.Observable(subscriber => {
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
exports.CollectionOrQueryAngularWrapper = CollectionOrQueryAngularWrapper;
class DocumentAngularWrapper extends document_wrapper_1.DocumentWrapper {
    constructor(firestore, doc) {
        super(firestore, doc.ref);
        this.doc = doc;
    }
    collection(collectionPath) {
        return new CollectionOrQueryAngularWrapper(this.fakeFirestore, this.doc.collection(collectionPath));
    }
    get(options) {
        return this.doc.get(options).pipe(operators_1.first()).toPromise();
    }
}
exports.DocumentAngularWrapper = DocumentAngularWrapper;
class UniversalFirestoreAngularImpl extends __1.UniversalFirestore {
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
        return this.firestore.firestore.runTransaction((transaction) => updateFunction(new transaction_wrapper_1.TransactionWrapper(transaction)));
    }
    batch() {
        return new write_batch_wrapper_1.WriteBatchWrapper(this.firestore.firestore.batch());
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
        let ref = collectionPathOrQuery instanceof collection_query_wrapper_1.CollectionOrQueryWrapper ? collectionPathOrQuery.ref : collectionPathOrQuery;
        let query = collectionPathOrQuery instanceof collection_query_wrapper_1.CollectionOrQueryWrapper ? collectionPathOrQuery["query"] : collectionPathOrQuery;
        return new firestore_1.AngularFirestoreCollection(ref, query || ref, this.firestore).valueChanges().pipe(operators_1.map(data => {
            if (options && options.serializer) {
                return this.unserialize(data, new json_1.ArraySerializer(options.serializer), options.serializationOptions);
            }
            return data;
        }));
    }
    docDataObservable(doc, options) {
        if (typeof doc == "string") {
            return this.docDataObservable(this.doc(doc), options);
        }
        return this.firestore.doc(doc.path).valueChanges().pipe(operators_1.map(data => {
            if (options && options.serializer) {
                return this.unserialize(data, options.serializer, options.serializationOptions);
            }
            return data;
        }));
    }
    get Timestamp() {
        return app_1.default.firestore.Timestamp;
    }
    get GeoPoint() {
        return app_1.default.firestore.GeoPoint;
    }
    get FieldValue() {
        return app_1.default.firestore.FieldValue;
    }
    get FieldPath() {
        return app_1.default.firestore.FieldPath;
    }
}
exports.UniversalFirestoreAngularImpl = UniversalFirestoreAngularImpl;
//# sourceMappingURL=firestore.js.map