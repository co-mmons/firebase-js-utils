import { GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions } from "./types";
declare module "./firestore" {
    interface UniversalFirestore {
        docs(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]>;
    }
}
