"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("firebase/firestore");
var app_1 = require("firebase/app");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
app_1.firestore.Query.prototype.docsDataObservable = function (options) {
    return this.snapshotObservable(options).pipe(operators_1.map(function (snapshot) {
        var data = [];
        for (var _i = 0, _a = snapshot.docs; _i < _a.length; _i++) {
            var d = _a[_i];
            if (d.exists) {
                data.push(d.data(options));
            }
        }
        return data;
    }));
};
app_1.firestore.Query.prototype.docsObservable = function (options) {
    return this.snapshotObservable(options).pipe(operators_1.map(function (snapshot) {
        return snapshot.docs;
    }));
};
app_1.firestore.Query.prototype.snapshotObservable = function (options) {
    var _this = this;
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = _this.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
};
//# sourceMappingURL=query-observable.js.map