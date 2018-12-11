import { SerializationOptions } from "./serialization-options";
import { GetOptions, Query, SnapshotOptions } from "./types";
declare module "./firestore" {
    interface AbstractFirestore {
        docsData<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V[]>;
    }
}
