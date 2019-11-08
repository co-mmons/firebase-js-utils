import { ArraySerializer } from "@co.mmons/js-utils/json";
import { map } from "rxjs/operators";
import { extractSnapshotOptions } from "../extract-snapshot-options";
import { UniversalFirestore } from "../firestore";
function docsDataObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
    }
    let observable = this.docsSnapshotsObservable(collectionPathOrQuery, options).pipe(map(snapshots => {
        let data = [];
        for (let snapshot of snapshots) {
            data.push(snapshot.data(extractSnapshotOptions(options)));
        }
        if (options && options.serializer) {
            return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
export function docsDataObservableInject() {
    UniversalFirestore.prototype.docsDataObservable = docsDataObservable;
}
//# sourceMappingURL=docs-data-observable.js.map