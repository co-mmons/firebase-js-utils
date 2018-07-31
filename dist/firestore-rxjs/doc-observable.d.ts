import { firestore as _firestore } from "firebase/app";
import { Observable } from "rxjs";
declare module "firebase/app" {
    namespace firestore {
        interface Firestore {
            observeDocData<V = any>(doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Observable<V>;
            observeDoc(doc: string | _firestore.DocumentReference, options?: _firestore.SnapshotListenOptions): Observable<_firestore.DocumentSnapshot>;
        }
        interface DocumentReference {
            observeData<V = any>(options?: _firestore.SnapshotListenOptions & _firestore.SnapshotOptions): Observable<V>;
            observeSnapshot(options?: _firestore.SnapshotListenOptions): Observable<_firestore.DocumentSnapshot>;
        }
    }
}
export declare const docLoaded: boolean;
