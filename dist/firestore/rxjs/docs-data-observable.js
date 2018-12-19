"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_1 = require("@co.mmons/js-utils/json");
var operators_1 = require("rxjs/operators");
var extract_snapshot_options_1 = require("../extract-snapshot-options");
var firestore_1 = require("../firestore");
function docsDataObservable(collectionPathOrQuery, options) {
    var _this = this;
    if (typeof collectionPathOrQuery == "string") {
        return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
    }
    var observable = this.docsSnapshotsObservable(collectionPathOrQuery, options).pipe(operators_1.map(function (snapshots) {
        var data = [];
        for (var _i = 0, snapshots_1 = snapshots; _i < snapshots_1.length; _i++) {
            var snapshot = snapshots_1[_i];
            data.push(snapshot.data(extract_snapshot_options_1.extractSnapshotOptions(options)));
        }
        if (options && options.serializer) {
            return _this.unserialize(data, new json_1.ArraySerializer(options.serializer), options.serializationOptions);
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