"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docSnapshotObservable = void 0;
var rxjs_1 = require("rxjs");
var extract_snapshot_listen_options_1 = require("../client/extract-snapshot-listen-options");
var union_types_1 = require("../union-types");
function docSnapshotObservable(doc, options) {
    return new rxjs_1.Observable(function (subscriber) {
        if (union_types_1.DocumentReference.isClient(doc)) {
            var unsubscribe_1 = doc.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options) || {}, function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe_1(); };
        }
        else if (union_types_1.DocumentReference.isAdmin(doc)) {
            var unsubscribe_2 = doc.onSnapshot(function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe_2(); };
        }
    });
}
exports.docSnapshotObservable = docSnapshotObservable;
//# sourceMappingURL=doc-snapshot-observable.js.map