import {DocumentReference, GetOptions, SnapshotOptions} from "../../types";
import {Observable} from "rxjs";
import {UniversalFirestoreAngularImpl} from "../firestore";
import {SerializationOptions} from "../../serialization-options";
import {map} from "rxjs/operators";

function docDataObservable<V = any>(this: UniversalFirestoreAngularImpl, doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V> {

    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }

    return this.realAngularFirestore.doc(doc.path).valueChanges().pipe(map(data => {

        if (options && options.serializer) {
            return this.unserialize(data, options.serializer, options.serializationOptions);
        }

        return data;

    }));
}

declare module "../firestore" {

    interface UniversalFirestoreAngularImpl {
        docDataObservable<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V>;
    }

}

UniversalFirestoreAngularImpl.prototype.docDataObservable = docDataObservable;
