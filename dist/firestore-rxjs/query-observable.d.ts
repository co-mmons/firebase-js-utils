import { firestore as _firestore } from "firebase/app";
import { Observable } from "rxjs";
declare module "firebase/app" {
    namespace firestore {
        interface Query {
            docsObservable(options?: _firestore.SnapshotListenOptions): Observable<_firestore.QueryDocumentSnapshot[]>;
            docsDataObservable<V = any>(options?: _firestore.SnapshotListenOptions): Observable<V[]>;
            snapshotObservable(options?: _firestore.SnapshotListenOptions): Observable<_firestore.QuerySnapshot>;
        }
    }
}
