import { firestore as _firestore } from "firebase/app";
import { Observable } from "rxjs";
declare module "firebase/app" {
    namespace firestore {
        interface Firestore {
            docDataObservable<V = any>(doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Observable<V>;
            docObservable(doc: string | _firestore.DocumentReference, options?: _firestore.SnapshotListenOptions): Observable<_firestore.DocumentSnapshot>;
        }
        interface DocumentReference {
            dataObservable<V = any>(options?: _firestore.SnapshotListenOptions & _firestore.SnapshotOptions): Observable<V>;
            snapshotObservable(options?: _firestore.SnapshotListenOptions): Observable<_firestore.DocumentSnapshot>;
        }
    }
}
