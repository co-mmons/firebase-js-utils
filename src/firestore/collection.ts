import {firestore, firestore as _firestore} from "firebase/app";

declare module "firebase/app" {

    namespace firestore {
        interface CollectionReference {
            docData<V = any>(doc: string, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V>;
        }
    }
}

firestore.CollectionReference.prototype.docData = async function <V = any>(this: firestore.CollectionReference, docPath: string, options?: _firestore.GetOptions & firestore.SnapshotOptions): Promise<V> {
    return (await this.doc(docPath).get(options)).data(options) as V;
}
