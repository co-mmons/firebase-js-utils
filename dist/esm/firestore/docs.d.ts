import { GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions } from "./types";
declare module "./helper" {
    interface FirestoreHelper {
        docs(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]>;
    }
}
