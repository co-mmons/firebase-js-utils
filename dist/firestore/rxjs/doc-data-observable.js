"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var extract_snapshot_options_1 = require("../extract-snapshot-options");
var firestore_1 = require("../firestore");
function docDataObservable(doc, options) {
    var _this = this;
    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }
    var observable = this.docSnapshotObservable(doc, options).pipe(operators_1.map(function (snapshot) {
        var data = snapshot.data(extract_snapshot_options_1.extractSnapshotOptions(options));
        if (options && options.serializer) {
            return _this.unserialize(data, options.serializer, options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
function docDataObservableInject() {
    firestore_1.UniversalFirestore.prototype.docDataObservable = docDataObservable;
}
exports.docDataObservableInject = docDataObservableInject;
//# sourceMappingURL=doc-data-observable.js.map