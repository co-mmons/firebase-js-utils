"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = require("rxjs/operators");
const extract_snapshot_options_1 = require("../extract-snapshot-options");
const firestore_1 = require("../firestore");
function docDataObservable(doc, options) {
    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }
    let observable = this.docSnapshotObservable(doc, options).pipe(operators_1.map(snapshot => {
        let data = snapshot.data(extract_snapshot_options_1.extractSnapshotOptions(options));
        if (options && options.serializer) {
            return this.unserialize(data, options.serializer, options.serializationOptions);
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