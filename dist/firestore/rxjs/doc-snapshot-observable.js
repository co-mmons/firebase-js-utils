"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var firestore_1 = require("../firestore");
function docSnapshotObservable(doc, options) {
    if (typeof doc == "string") {
        return this.docSnapshotObservable(this.doc(doc), options);
    }
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = doc.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
firestore_1.UniversalFirestore.prototype.docSnapshotObservable = docSnapshotObservable;
//# sourceMappingURL=doc-snapshot-observable.js.map