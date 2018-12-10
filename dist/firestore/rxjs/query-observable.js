"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var helper_1 = require("../helper");
function collectionOrQueryObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.collectionObservable(this.collection(collectionPathOrQuery), options);
    }
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
helper_1.FirestoreHelper.prototype.collectionObservable = collectionOrQueryObservable;
helper_1.FirestoreHelper.prototype.queryObservable = collectionOrQueryObservable;
//# sourceMappingURL=query-observable.js.map