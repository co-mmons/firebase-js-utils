import {FirestoreHelper} from "./helper";
import {GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions} from "./types";

async function docs(this: FirestoreHelper, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docs(this.collection(collectionPathOrQuery), options);
    }

    return (await collectionPathOrQuery.get(options)).docs;
}


declare module "./helper" {

    interface FirestoreHelper {
        docs(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]>;
    }

}

FirestoreHelper.prototype.docs = docs;
