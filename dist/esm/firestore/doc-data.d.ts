import { DocumentReference, GetOptions, SnapshotOptions } from "./types";
declare module "./helper" {
    interface FirestoreHelper {
        docData<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions): Promise<V>;
    }
}
