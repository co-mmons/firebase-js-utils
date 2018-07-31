import {firestore, firestore as _firestore} from "firebase/app";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

declare module "firebase/app" {

    namespace firestore {

        interface Query {

            observeDocs(options?: _firestore.SnapshotListenOptions): Observable<_firestore.QueryDocumentSnapshot[]>;

            observeDocsData<V = any>(options?: _firestore.SnapshotListenOptions): Observable<V[]>;

            observeSnapshot(options?: _firestore.SnapshotListenOptions): Observable<_firestore.QuerySnapshot>;
        }
    }
}

firestore.Query.prototype.observeDocsData = function <V = any>(this: firestore.Query, options?: firestore.SnapshotListenOptions & firestore.SnapshotOptions): Observable<V[]> {

    return this.observeSnapshot(options).pipe(map(snapshot => {
        let data: V[] = [];

        for (let d of snapshot.docs) {
            if (d.exists) {
                data.push(d.data(options) as V);
            }
        }

        return data;
    }));
}

firestore.Query.prototype.observeDocs = function (this: firestore.Query, options?: firestore.SnapshotListenOptions & firestore.SnapshotOptions): Observable<_firestore.QueryDocumentSnapshot[]> {
    return this.observeSnapshot(options).pipe(map(snapshot => {
        return snapshot.docs;
    }));
}

firestore.Query.prototype.observeSnapshot = function (this: firestore.Query, options?: firestore.SnapshotListenOptions): Observable<firestore.QuerySnapshot> {
    return new Observable(subscriber => {
        let unsubscribe = this.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

export const queryLoaded = true;