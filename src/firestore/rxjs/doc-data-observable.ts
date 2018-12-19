import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {extractSnapshotOptions} from "../extract-snapshot-options";
import {UniversalFirestore} from "../firestore";
import {SerializationOptions} from "../serialization-options";
import {DocumentReference, SnapshotListenOptions, SnapshotOptions} from "../types";

function docDataObservable<V = any>(this: UniversalFirestore, doc: string | DocumentReference, options?: SnapshotOptions & SnapshotListenOptions & SerializationOptions): Observable<V> {

    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }

    let observable = this.docSnapshotObservable(doc, options).pipe(map(snapshot => {
        let data = snapshot.data(extractSnapshotOptions(options)) as V;

        if (options && options.serializer) {
            return this.unserialize(data, options.serializer, options.serializationOptions);
        }

        return data;
    }));

    return observable;
}

declare module "../firestore" {

    interface UniversalFirestore {
        docDataObservable<V = any>(doc: string | DocumentReference, options?: SnapshotOptions & SnapshotListenOptions & SerializationOptions): Observable<V>;
    }

}

export function docDataObservableInject() {
    UniversalFirestore.prototype.docDataObservable = docDataObservable;
}
