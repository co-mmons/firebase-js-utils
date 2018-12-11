import {DocumentReference, GetOptions, SnapshotOptions} from "../../types";
import {Observable} from "rxjs";
import {AngularFirestore} from "../firestore";
import {SerializationOptions} from "../../serialization-options";
import {map} from "rxjs/operators";

function docDataObservable<V = any>(this: AngularFirestore, doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V> {

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

    interface AngularFirestore {
        docDataObservable<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V>;
    }

}

AngularFirestore.prototype.docDataObservable = docDataObservable;
