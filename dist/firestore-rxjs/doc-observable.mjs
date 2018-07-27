import { firestore } from "firebase/app";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
firestore.Firestore.prototype.observeDocData = function (doc, options) {
    if (typeof doc == "string") {
        return this.observeDocData(this.doc(doc), options);
    }
    var observable = this.observeDoc(doc).pipe(map(function (snapshot) {
        return snapshot.data();
    }));
    return observable;
};
firestore.Firestore.prototype.observeDoc = function (doc, options) {
    if (typeof doc == "string") {
        return this.observeDoc(this.doc(doc), options);
    }
    return doc.observeSnapshot();
};
firestore.DocumentReference.prototype.observeData = function (options) {
    return this.observeSnapshot(options).pipe(map(function (snapshot) {
        return snapshot.data(options);
    }));
};
firestore.DocumentReference.prototype.observeSnapshot = function (options) {
    var _this = this;
    return new Observable(function (subscriber) {
        var unsubscribe = _this.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
};
//# sourceMappingURL=doc-observable.js.map