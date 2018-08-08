import {firestore} from "firebase/app";

async function docsData<V = any>(this: firestore.Query, options?: firestore.GetOptions & firestore.SnapshotOptions): Promise<V[]> {

    let data: V[] = [];

    for (let d of (await this.get(options)).docs) {
        data.push(d.data(options) as V);
    }

    return data;
}

async function docs(this: firestore.Query, options?: firestore.GetOptions & firestore.SnapshotOptions): Promise<firestore.QueryDocumentSnapshot[]> {
    return (await this.get(options)).docs;
}

export function loadQuery() {
    firestore.Query.prototype.docsData = docsData;
    firestore.Query.prototype.docs = docs;
}