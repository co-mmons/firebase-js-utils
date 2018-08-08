"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function observeDocData(doc, options) {
    if (typeof doc == "string") {
        return this.observeDocData(this.doc(doc), options);
    }
    var observable = this.observeDoc(doc).pipe(operators_1.map(function (snapshot) {
        return snapshot.data();
    }));
    return observable;
}
function observeDoc(doc, options) {
    if (typeof doc == "string") {
        return this.observeDoc(this.doc(doc), options);
    }
    return doc.observeSnapshot();
}
function observeData(options) {
    return this.observeSnapshot(options).pipe(operators_1.map(function (snapshot) {
        return snapshot.data(options);
    }));
}
function observeSnapshot(options) {
    var _this = this;
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = _this.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
function loadDoc() {
    app_1.firestore.Firestore.prototype.observeDocData = observeDocData;
    app_1.firestore.Firestore.prototype.observeDoc = observeDoc;
    app_1.firestore.DocumentReference.prototype.observeData = observeData;
    app_1.firestore.DocumentReference.prototype.observeSnapshot = observeSnapshot;
}
exports.loadDoc = loadDoc;
//# sourceMappingURL=doc-observable.js.map