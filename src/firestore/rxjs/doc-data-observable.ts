import {DocumentReference, GetOptions, SnapshotOptions} from "../types";
import {Observable} from "rxjs";
import {FirestoreHelper} from "../helper";
import {SerializationOptions} from "../serialization-options";
import {map} from "rxjs/operators";

function docDataObservable<V = any>(this: FirestoreHelper, doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V> {

    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }

    let observable = this.docObservable(doc).pipe(map(snapshot => {
        let data = snapshot.data() as V;

        if (options && options.serializer) {
            return this.unserialize(data, options.serializer, options.serializationOptions);
        }

        return data;
    }));

    return observable;
}

declare module "../helper" {

    interface FirestoreHelper {
        docDataObservable<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V>;
    }

}

FirestoreHelper.prototype.docDataObservable = docDataObservable;
