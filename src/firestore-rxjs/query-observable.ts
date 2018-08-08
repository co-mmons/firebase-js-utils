import {firestore, firestore as _firestore} from "firebase/app";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

function observeDocsData<V = any>(this: firestore.Query, options?: firestore.SnapshotListenOptions & firestore.SnapshotOptions): Observable<V[]> {

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

function observeDocs(this: firestore.Query, options?: firestore.SnapshotListenOptions & firestore.SnapshotOptions): Observable<_firestore.QueryDocumentSnapshot[]> {
    return this.observeSnapshot(options).pipe(map(snapshot => {
        return snapshot.docs;
    }));
}

function observeSnapshot(this: firestore.Query, options?: firestore.SnapshotListenOptions): Observable<firestore.QuerySnapshot> {
    return new Observable(subscriber => {
        let unsubscribe = this.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

export function loadQuery() {
    firestore.Query.prototype.observeDocsData = observeDocsData;
    firestore.Query.prototype.observeDocs = observeDocs;
    firestore.Query.prototype.observeSnapshot = observeSnapshot;
}