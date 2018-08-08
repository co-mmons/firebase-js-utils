import {firestore, firestore as _firestore} from "firebase/app";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

function observeDocData<V = any>(this: firestore.Firestore, doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & firestore.SnapshotOptions): Observable<V> {

    if (typeof doc == "string") {
        return this.observeDocData(this.doc(doc), options);
    }

    let observable = this.observeDoc(doc).pipe(map(snapshot => {
        return snapshot.data() as V;
    }));

    return observable;
}

function observeDoc <V = any>(this: firestore.Firestore, doc: string | _firestore.DocumentReference, options?: _firestore.GetOptions & firestore.SnapshotOptions): Observable<firestore.DocumentSnapshot> {

    if (typeof doc == "string") {
        return this.observeDoc(this.doc(doc), options);
    }

    return doc.observeSnapshot();
}

function observeData <V = any>(this: firestore.DocumentReference, options?: firestore.SnapshotListenOptions & firestore.SnapshotOptions): Observable<V> {
    return this.observeSnapshot(options).pipe(map(snapshot => {
        return snapshot.data(options) as V;
    }));
}

function observeSnapshot <V = any>(this: firestore.DocumentReference, options?: firestore.SnapshotListenOptions): Observable<firestore.DocumentSnapshot> {
    return new Observable(subscriber => {
        let unsubscribe = this.onSnapshot(options || {}, subscriber);
        return () => unsubscribe();
    });
}

export function loadDoc () {
    firestore.Firestore.prototype.observeDocData = observeDocData;
    firestore.Firestore.prototype.observeDoc = observeDoc;
    firestore.DocumentReference.prototype.observeData = observeData;
    firestore.DocumentReference.prototype.observeSnapshot = observeSnapshot;
}
