import { firestore as _firestore } from "firebase/app";
import { Observable } from "rxjs";
declare module "firebase/app" {
    namespace firestore {
        interface Query {
            observeDocs(options?: _firestore.SnapshotListenOptions): Observable<_firestore.QueryDocumentSnapshot[]>;
            observeDocsData<V = any>(options?: _firestore.SnapshotListenOptions): Observable<V[]>;
            observeSnapshot(options?: _firestore.SnapshotListenOptions): Observable<_firestore.QuerySnapshot>;
        }
    }
}
export declare const queryLoaded: boolean;
