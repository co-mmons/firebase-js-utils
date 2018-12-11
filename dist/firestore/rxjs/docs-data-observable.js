"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_1 = require("@co.mmons/js-utils/json");
var operators_1 = require("rxjs/operators");
var firestore_1 = require("../firestore");
function docsDataObservable(collectionPathOrQuery, options) {
    var _this = this;
    if (typeof collectionPathOrQuery == "string") {
        return this.docDataObservable(this.doc(collectionPathOrQuery), options);
    }
    var observable = this.docsObservable(collectionPathOrQuery).pipe(operators_1.map(function (snapshots) {
        var data = [];
        for (var _i = 0, snapshots_1 = snapshots; _i < snapshots_1.length; _i++) {
            var snapshot = snapshots_1[_i];
            data.push(snapshot.data());
        }
        if (options && options.serializer) {
            return _this.unserialize(data, new json_1.ArraySerializer(options.serializer), options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
firestore_1.AbstractFirestore.prototype.docsDataObservable = docsDataObservable;
//# sourceMappingURL=docs-data-observable.js.map