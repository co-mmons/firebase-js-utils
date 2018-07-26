"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("firebase/firestore");
var app_1 = require("firebase/app");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
app_1.firestore.Firestore.prototype.docDataObservable = function (doc, options) {
    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }
    var observable = this.docObservable(doc).pipe(operators_1.map(function (snapshot) {
        return snapshot.data();
    }));
    return observable;
};
app_1.firestore.Firestore.prototype.docObservable = function (doc, options) {
    if (typeof doc == "string") {
        return this.docObservable(this.doc(doc), options);
    }
    return doc.snapshotObservable();
};
app_1.firestore.DocumentReference.prototype.dataObservable = function (options) {
    return this.snapshotObservable(options).pipe(operators_1.map(function (snapshot) {
        return snapshot.data(options);
    }));
};
app_1.firestore.DocumentReference.prototype.snapshotObservable = function (options) {
    var _this = this;
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = _this.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
};
//# sourceMappingURL=doc-observable.js.map