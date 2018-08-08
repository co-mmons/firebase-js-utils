import {firestore, firestore as _firestore} from "firebase/app";

declare module "firebase/app" {

    namespace firestore {
        
        interface Firestore {
            docData<V = any>(doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V>;
            docs(collection: string | _firestore.CollectionReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<_firestore.QueryDocumentSnapshot[]>;
            docsData<V = any>(collection: string | _firestore.CollectionReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V[]>;
        }

        interface CollectionReference {
            docData<V = any>(doc: string, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V>;
        }
        
        interface Query {

            docs(options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<_firestore.QueryDocumentSnapshot[]>;

            docsData<V = any>(options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V[]>;
        }
    }
}
