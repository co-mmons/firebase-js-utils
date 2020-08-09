"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionSnapshotObservable = exports.querySnapshotObservable = void 0;
var rxjs_1 = require("rxjs");
var extract_snapshot_listen_options_1 = require("../client/extract-snapshot-listen-options");
var union_types_1 = require("../union-types");
function querySnapshotObservable(query, options) {
    if (union_types_1.Query.isClient(query)) {
        return new rxjs_1.Observable(function (subscriber) {
            var unsubscribe = query.onSnapshot(extract_snapshot_listen_options_1.extractSnapshotListenOptions(options) || {}, function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe(); };
        });
    }
    else if (union_types_1.Query.isAdmin(query)) {
        return new rxjs_1.Observable(function (subscriber) {
            var unsubscribe = query.onSnapshot(function (snapshot) { return subscriber.next(snapshot); }, function (error) { return subscriber.error(error); });
            return function () { return unsubscribe(); };
        });
    }
}
exports.querySnapshotObservable = querySnapshotObservable;
function collectionSnapshotObservable(collection, options) {
    if (union_types_1.CollectionReference.isClient(collection)) {
        return querySnapshotObservable(collection, options);
    }
    else if (union_types_1.CollectionReference.isAdmin(collection)) {
        return querySnapshotObservable(collection);
    }
    else {
        throw new Error("Invalid collection");
    }
}
exports.collectionSnapshotObservable = collectionSnapshotObservable;
//# sourceMappingURL=collection-query-snapshot-observable.js.map