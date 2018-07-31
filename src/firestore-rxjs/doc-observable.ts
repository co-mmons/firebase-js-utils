import {firestore as _firestore, firestore} from "firebase/app";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

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

firestore.Firestore.prototype.observeDocData = function <V = any>(this: firestore.Firestore, doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & firestore.SnapshotOptions): Observable<V> {

    if (typeof doc == "string") {
        return this.observeDocData(this.doc(doc), options);
    }

    let observable = this.observeDoc(doc).pipe(map(snapshot => {
        return snapshot.data() as V;
    }));

    return observable;
}

firestore.Firestore.prototype.observeDoc = function <V = any>(this: firestore.Firestore, doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & firestore.SnapshotOptions): Observable<firestore.DocumentSnapshot> {

    if (typeof doc == "string") {
        return this.observeDoc(this.doc(doc), options);
    }

    return doc.observeSnapshot();
}

firestore.DocumentReference.prototype.observeData = function <V = any>(this: firestore.DocumentReference, options?: firestore.SnapshotListenOptions & firestore.SnapshotOptions): Observable<V> {
    return this.observeSnapshot(options).pipe(map(snapshot => {
        return snapshot.data(options) as V;
    }));
}

firestore.DocumentReference.prototype.observeSnapshot = function <V = any>(this: firestore.DocumentReference, options?: firestore.SnapshotListenOptions): Observable<firestore.DocumentSnapshot> {
    return new Observable(subscriber => {
        let unsubscribe = this.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

export const docLoaded = true;
