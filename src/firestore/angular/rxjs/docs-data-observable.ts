import {ArraySerializer} from "@co.mmons/js-utils/json";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AngularFirestore} from "../firestore";
import {SerializationOptions} from "../../serialization-options";
import {GetOptions, Query, SnapshotOptions} from "../../types";

function docsDataObservable<V = any>(this: AngularFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docDataObservable(this.doc(collectionPathOrQuery), options);
    }

    if (!collectionPathOrQuery["path"]) {
        throw new Error("Not supported object: " + collectionPathOrQuery);
    }

    return this.realAngularFirestore.collection(collectionPathOrQuery["path"], () => <any>collectionPathOrQuery).valueChanges().pipe(map(data => {

        if (options && options.serializer) {
            return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
        }

        return data;
    }));
}

declare module "../firestore" {

    interface AngularFirestore {
        docsDataObservable<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V[]>;
    }

}

AngularFirestore.prototype.docsDataObservable = docsDataObservable;
