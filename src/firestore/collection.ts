import {firestore} from "firebase/app";

async function docData<V = any>(this: firestore.CollectionReference, docPath: string, options?: firestore.GetOptions & firestore.SnapshotOptions): Promise<V> {
    return (await this.doc(docPath).get(options)).data(options) as V;
}

export function loadCollection() {
    firestore.CollectionReference.prototype.docData = docData;
}