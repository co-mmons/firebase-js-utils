import { DocumentReference, GetOptions, SnapshotOptions } from "./types";
import { SerializationOptions } from "./serialization-options";
declare module "./firestore" {
    interface UniversalFirestore {
        docData<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V>;
    }
}
