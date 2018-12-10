"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var helper_1 = require("../helper");
function docsObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.docsObservable(this.collection(collectionPathOrQuery), options);
    }
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    }).pipe(operators_1.map(function (snapshot) { return snapshot.docs; }));
}
helper_1.FirestoreHelper.prototype.docsObservable = docsObservable;
//# sourceMappingURL=docs-observable.js.map