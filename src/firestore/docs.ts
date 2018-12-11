import {AbstractFirestore} from "./firestore";
import {GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions} from "./types";

async function docs(this: AbstractFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docs(this.collection(collectionPathOrQuery), options);
    }

    return (await collectionPathOrQuery.get(options)).docs;
}


declare module "./firestore" {

    interface AbstractFirestore {
        docs(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]>;
    }

}

AbstractFirestore.prototype.docs = docs;
