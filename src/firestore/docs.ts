import {UniversalFirestore} from "./firestore";
import {GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions} from "./types";

async function docs(this: UniversalFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docs(this.collection(collectionPathOrQuery), options);
    }

    return (await collectionPathOrQuery.get(options)).docs;
}


declare module "./firestore" {

    interface UniversalFirestore {
        docs(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]>;
    }

}

UniversalFirestore.prototype.docs = docs;
