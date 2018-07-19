import {firestore as _firestore, firestore} from "firebase/app";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

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

firestore.Firestore.prototype.docDataObservable = function <V = any>(this: firestore.Firestore, doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & firestore.SnapshotOptions): Observable<V> {

    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }

    let observable = this.docObservable(doc).pipe(map(snapshot => {
        return snapshot.data() as V;
    }));

    return observable;
}

firestore.Firestore.prototype.docObservable = function <V = any>(this: firestore.Firestore, doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & firestore.SnapshotOptions): Observable<firestore.DocumentSnapshot> {

    if (typeof doc == "string") {
        return this.docObservable(this.doc(doc), options);
    }

    return doc.snapshotObservable();
}

firestore.DocumentReference.prototype.dataObservable = function <V = any>(this: firestore.DocumentReference, options?: firestore.SnapshotListenOptions & firestore.SnapshotOptions): Observable<V> {
    return this.snapshotObservable(options).pipe(map(snapshot => {
        return snapshot.data(options) as V;
    }));
}

firestore.DocumentReference.prototype.snapshotObservable = function <V = any>(this: firestore.DocumentReference, options?: firestore.SnapshotListenOptions): Observable<firestore.DocumentSnapshot> {
    return new Observable(subscriber => {
        let unsubscribe = this.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}
