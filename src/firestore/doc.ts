import "firebase/firestore";
import {firestore, firestore as _firestore} from "firebase/app";

declare module "firebase/app" {

    namespace firestore {
        interface Firestore {
            docData<V = any>(doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V>;
        }
    }
}

firestore.Firestore.prototype.docData = async function <V = any>(this: firestore.Firestore, doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & firestore.SnapshotOptions): Promise<V> {

    if (typeof doc == "string") {
        return this.docData<V>(firestore().doc(doc), options);
    }

    return (await doc.get(options)).data(options) as V;
}
