"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
app_1.firestore.Firestore.prototype.observeDocData = function (doc, options) {
    if (typeof doc == "string") {
        return this.observeDocData(this.doc(doc), options);
    }
    var observable = this.observeDoc(doc).pipe(operators_1.map(function (snapshot) {
        return snapshot.data();
    }));
    return observable;
};
app_1.firestore.Firestore.prototype.observeDoc = function (doc, options) {
    if (typeof doc == "string") {
        return this.observeDoc(this.doc(doc), options);
    }
    return doc.observeSnapshot();
};
app_1.firestore.DocumentReference.prototype.observeData = function (options) {
    return this.observeSnapshot(options).pipe(operators_1.map(function (snapshot) {
        return snapshot.data(options);
    }));
};
app_1.firestore.DocumentReference.prototype.observeSnapshot = function (options) {
    var _this = this;
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = _this.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
};
//# sourceMappingURL=doc-observable.js.map