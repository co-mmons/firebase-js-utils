"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("@co.mmons/js-utils/json");
const operators_1 = require("rxjs/operators");
const extract_snapshot_options_1 = require("../extract-snapshot-options");
const firestore_1 = require("../firestore");
function docsDataObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
    }
    let observable = this.docsSnapshotsObservable(collectionPathOrQuery, options).pipe(operators_1.map(snapshots => {
        let data = [];
        for (let snapshot of snapshots) {
            data.push(snapshot.data(extract_snapshot_options_1.extractSnapshotOptions(options)));
        }
        if (options && options.serializer) {
            return this.unserialize(data, new json_1.ArraySerializer(options.serializer), options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
function docsDataObservableInject() {
    firestore_1.UniversalFirestore.prototype.docsDataObservable = docsDataObservable;
}
exports.docsDataObservableInject = docsDataObservableInject;
//# sourceMappingURL=docs-data-observable.js.map