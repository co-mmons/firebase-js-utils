import "firebase/firestore";
import { firestore as _firestore } from "firebase/app";
declare module "firebase/app" {
    namespace firestore {
        interface Firestore {
            docData<V = any>(doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V>;
        }
    }
}
