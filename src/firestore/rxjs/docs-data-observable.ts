import {ArraySerializer} from "@co.mmons/js-utils/json";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {FirestoreHelper} from "../helper";
import {SerializationOptions} from "../serialization-options";
import {GetOptions, Query, SnapshotOptions} from "../types";

function docsDataObservable<V = any>(this: FirestoreHelper, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docDataObservable(this.doc(collectionPathOrQuery), options);
    }

    let observable = this.docsObservable(collectionPathOrQuery).pipe(map(snapshots => {
        let data: V[] = [];

        for (let snapshot of snapshots) {
            data.push(snapshot.data() as V);
        }

        if (options && options.serializer) {
            return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
        }

        return data;
    }));

    return observable;
}

declare module "../helper" {

    interface FirestoreHelper {
        docsDataObservable<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Observable<V[]>;
    }

}

FirestoreHelper.prototype.docsDataObservable = docsDataObservable;
