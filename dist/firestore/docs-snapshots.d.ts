import { GetOptions, Query, QueryDocumentSnapshot, SnapshotOptions } from "./types";
declare module "./firestore" {
    interface UniversalFirestore {
        docsSnapshots(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions): Promise<QueryDocumentSnapshot[]>;
    }
}
