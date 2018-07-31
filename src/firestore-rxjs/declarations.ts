import {firestore as _firestore, firestore} from "firebase/app";
import {Observable} from "rxjs";

declare module "firebase/app" {

    namespace firestore {
        
        interface Firestore {
            docData<V = any>(doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V>;
            observeDocData<V = any>(doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Observable<V>;
            observeDoc(doc: string | _firestore.DocumentReference, options?: _firestore.SnapshotListenOptions): Observable<_firestore.DocumentSnapshot>;
            docs(collection: string | _firestore.CollectionReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<_firestore.QueryDocumentSnapshot[]>;
            docsData<V = any>(collection: string | _firestore.CollectionReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V[]>;
        }

        interface CollectionReference {
            docData<V = any>(doc: string, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V>;
        }

        interface DocumentReference {
            observeData<V = any>(options?: _firestore.SnapshotListenOptions & _firestore.SnapshotOptions): Observable<V>;
            observeSnapshot(options?: _firestore.SnapshotListenOptions): Observable<_firestore.DocumentSnapshot>;
        }

        interface Query {

            docs(options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<_firestore.QueryDocumentSnapshot[]>;

            docsData<V = any>(options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V[]>;
            
            observeDocs(options?: _firestore.SnapshotListenOptions): Observable<_firestore.QueryDocumentSnapshot[]>;

            observeDocsData<V = any>(options?: _firestore.SnapshotListenOptions): Observable<V[]>;

            observeSnapshot(options?: _firestore.SnapshotListenOptions): Observable<_firestore.QuerySnapshot>;
        }
    }
}
