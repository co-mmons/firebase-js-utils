import {ArraySerializer} from "@co.mmons/js-utils/json";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {extractSnapshotOptions} from "../extract-snapshot-options";
import {UniversalFirestore} from "../firestore";
import {SerializationOptions} from "../serialization-options";
import {Query, SnapshotListenOptions, SnapshotOptions} from "../types";

function docsDataObservable<V = any>(this: UniversalFirestore, collectionPathOrQuery: string | Query, options?: SnapshotOptions & SnapshotListenOptions & SerializationOptions): Observable<V[]> {

    if (typeof collectionPathOrQuery == "string") {
        return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
    }

    let observable = this.docsSnapshotsObservable(collectionPathOrQuery, options).pipe(map(snapshots => {
        let data: V[] = [];

        for (let snapshot of snapshots) {
            data.push(snapshot.data(extractSnapshotOptions(options)) as V);
        }

        if (options && options.serializer) {
            return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
        }

        return data;
    }));

    return observable;
}

declare module "../firestore" {

    interface UniversalFirestore {
        docsDataObservable<V = any>(collectionPathOrQuery: string | Query, options?: SnapshotOptions & SnapshotListenOptions & SerializationOptions): Observable<V[]>;
    }

}

export function docsDataObservableInject() {
    UniversalFirestore.prototype.docsDataObservable = docsDataObservable;
}
