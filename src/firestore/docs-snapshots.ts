import {UniversalFirestore} from "./firestore";
import {GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions} from "./types";

async function docsSnapshots(this: UniversalFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docsSnapshots(this.collection(collectionPathOrQuery), options);
    }

    return (await collectionPathOrQuery.get(options)).docs;
}


declare module "./firestore" {

    interface UniversalFirestore {
        docsSnapshots(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]>;
    }

}

UniversalFirestore.prototype.docsSnapshots = docsSnapshots;
