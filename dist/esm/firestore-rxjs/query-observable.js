import { firestore } from "firebase/app";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
firestore.Query.prototype.observeDocsData = function (options) {
    return this.observeSnapshot(options).pipe(map(function (snapshot) {
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
firestore.Query.prototype.observeDocs = function (options) {
    return this.observeSnapshot(options).pipe(map(function (snapshot) {
        return snapshot.docs;
    }));
};
firestore.Query.prototype.observeSnapshot = function (options) {
    var _this = this;
    return new Observable(function (subscriber) {
        var unsubscribe = _this.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
};
export var queryLoaded = true;
//# sourceMappingURL=query-observable.js.map