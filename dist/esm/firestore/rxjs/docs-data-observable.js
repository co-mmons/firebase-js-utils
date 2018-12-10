import { ArraySerializer } from "@co.mmons/js-utils/json";
import { map } from "rxjs/operators";
import { FirestoreHelper } from "../helper";
function docsDataObservable(collectionPathOrQuery, options) {
    var _this = this;
    if (typeof collectionPathOrQuery == "string") {
        return this.docDataObservable(this.doc(collectionPathOrQuery), options);
    }
    var observable = this.docsObservable(collectionPathOrQuery).pipe(map(function (snapshots) {
        var data = [];
        for (var _i = 0, snapshots_1 = snapshots; _i < snapshots_1.length; _i++) {
            var snapshot = snapshots_1[_i];
            data.push(snapshot.data());
        }
        if (options && options.serializer) {
            return _this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
FirestoreHelper.prototype.docsDataObservable = docsDataObservable;
//# sourceMappingURL=docs-data-observable.js.map