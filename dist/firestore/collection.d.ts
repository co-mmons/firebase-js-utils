import { firestore as _firestore } from "firebase/app";
declare module "firebase/app" {
    namespace firestore {
        interface CollectionReference {
            docData<V = any>(doc: string, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V>;
        }
    }
}
