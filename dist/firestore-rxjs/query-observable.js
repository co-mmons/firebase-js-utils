"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function observeDocsData(options) {
    return this.observeSnapshot(options).pipe(operators_1.map(function (snapshot) {
        var data = [];
        for (var _i = 0, _a = snapshot.docs; _i < _a.length; _i++) {
            var d = _a[_i];
            if (d.exists) {
                data.push(d.data(options));
            }
        }
        return data;
    }));
}
function observeDocs(options) {
    return this.observeSnapshot(options).pipe(operators_1.map(function (snapshot) {
        return snapshot.docs;
    }));
}
function observeSnapshot(options) {
    var _this = this;
    return new rxjs_1.Observable(function (subscriber) {
        var unsubscribe = _this.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
function loadQuery() {
    app_1.firestore.Query.prototype.observeDocsData = observeDocsData;
    app_1.firestore.Query.prototype.observeDocs = observeDocs;
    app_1.firestore.Query.prototype.observeSnapshot = observeSnapshot;
}
exports.loadQuery = loadQuery;
//# sourceMappingURL=query-observable.js.map