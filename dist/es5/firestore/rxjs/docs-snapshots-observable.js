"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsSnapshotsObservable = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var extract_snapshot_listen_options_1 = require("../client/extract-snapshot-listen-options");
var union_types_1 = require("../union-types");
function docsSnapshotsObservable(query, options) {
    if (union_types_1.Query.isClient(query)) {
        return new rxjs_1.Observable(function (subscriber) {
            var unsubscribe = query.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options) || {}, function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe(); };
        }).pipe(operators_1.map(function (snapshot) { return snapshot.docs; }));
    }
    else if (union_types_1.Query.isAdmin(query)) {
        return new rxjs_1.Observable(function (subscriber) {
            var unsubscribe = query.onSnapshot(function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe(); };
        }).pipe(operators_1.map(function (snapshot) { return snapshot.docs; }));
    }
    else {
        throw new Error("Invalid query");
    }
}
exports.docsSnapshotsObservable = docsSnapshotsObservable;
//# sourceMappingURL=docs-snapshots-observable.js.map