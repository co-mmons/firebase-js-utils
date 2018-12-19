import { ArraySerializer } from "@co.mmons/js-utils/json";
import { map } from "rxjs/operators";
import { extractSnapshotOptions } from "../extract-snapshot-options";
import { UniversalFirestore } from "../firestore";
function docsDataObservable(collectionPathOrQuery, options) {
    var _this = this;
    if (typeof collectionPathOrQuery == "string") {
        return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
    }
    var observable = this.docsSnapshotsObservable(collectionPathOrQuery, options).pipe(map(function (snapshots) {
        var data = [];
        for (var _i = 0, snapshots_1 = snapshots; _i < snapshots_1.length; _i++) {
            var snapshot = snapshots_1[_i];
            data.push(snapshot.data(extractSnapshotOptions(options)));
        }
        if (options && options.serializer) {
            return _this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
export function docsDataObservableInject() {
    UniversalFirestore.prototype.docsDataObservable = docsDataObservable;
}
//# sourceMappingURL=docs-data-observable.js.map