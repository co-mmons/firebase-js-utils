"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var firestore_1 = require("../firestore");
function collectionOrQueryObservable(collectionPathOrQuery, options) {
    if (typeof collectionPathOrQuery == "string") {
        return this.collectionObservable(this.collection(collectionPathOrQuery), options);
    }
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = collectionPathOrQuery.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
firestore_1.AbstractFirestore.prototype.collectionObservable = collectionOrQueryObservable;
firestore_1.AbstractFirestore.prototype.queryObservable = collectionOrQueryObservable;
//# sourceMappingURL=query-observable.js.map