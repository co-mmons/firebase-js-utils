"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var helper_1 = require("../helper");
function docObservable(doc, options) {
    if (typeof doc == "string") {
        return this.docObservable(this.doc(doc), options);
    }
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = doc.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
helper_1.FirestoreHelper.prototype.docObservable = docObservable;
//# sourceMappingURL=doc-observable.js.map