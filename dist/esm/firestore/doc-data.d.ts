import { DocumentReference, GetOptions, SnapshotOptions } from "./types";
declare module "./firestore" {
    interface AbstractFirestore {
        docData<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions): Promise<V>;
    }
}
