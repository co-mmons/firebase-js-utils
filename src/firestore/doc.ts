import {firestore} from "firebase/app";

async function docData<V = any>(this: firestore.Firestore, doc: string | firestore.DocumentReference, options?: firestore.GetOptions & firestore.SnapshotOptions): Promise<V> {

    if (typeof doc == "string") {
        return this.docData<V>(firestore().doc(doc), options);
    }

    return (await doc.get(options)).data(options) as V;
}

function docs(this: firestore.Firestore, collection: string | firestore.CollectionReference, options?: firestore.GetOptions & firestore.SnapshotOptions): Promise<firestore.QueryDocumentSnapshot[]> {

    if (typeof collection == "string") {
        return this.docs(firestore().collection(collection), options);
    }

    return collection.docs(options);
}

function docsData<V = any>(this: firestore.Firestore, collection: string | firestore.CollectionReference, options?: firestore.GetOptions & firestore.SnapshotOptions): Promise<V[]> {

    if (typeof collection == "string") {
        return this.docsData<V>(firestore().collection(collection), options);
    }

    return collection.docsData();
}


export function loadDoc() {
    firestore.Firestore.prototype.docData = docData;
    firestore.Firestore.prototype.docs = docs;
    firestore.Firestore.prototype.docsData = docsData;
}