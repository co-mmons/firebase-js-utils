import {firestore} from "firebase/app";
import {UniversalFirestore} from "../firestore";
import {CollectionReference, DocumentReference, FieldPathStatic, FieldValueStatic, GeoPointStatic, TimestampStatic, Transaction, WriteBatch} from "../types";

export class UniversalFirestoreJsImpl extends UniversalFirestore {

    constructor(private readonly firestore: firestore.Firestore) {
        super();
    }

    collection(collectionPath: string): CollectionReference {
        return this.firestore.collection(collectionPath);        
    }
    
    doc(documentPath: string): DocumentReference {
        return this.firestore.doc(documentPath);
    }

    runTransaction<T>(updateFunction: (transaction: Transaction) => Promise<T>): Promise<T> {
        return this.firestore.runTransaction(updateFunction);
    }

    batch(): WriteBatch {
        return this.firestore.batch();
    }

    get Timestamp(): TimestampStatic {
        return firestore.Timestamp;
    }

    get GeoPoint(): GeoPointStatic {
        return firestore.GeoPoint;
    }

    get FieldValue(): FieldValueStatic {
        return firestore.FieldValue;
    }

    get FieldPath(): FieldPathStatic {
        return firestore.FieldPath;
    }
    
}