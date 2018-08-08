import { firestore } from "firebase/app";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
function observeDocData(doc, options) {
    if (typeof doc == "string") {
        return this.observeDocData(this.doc(doc), options);
    }
    var observable = this.observeDoc(doc).pipe(map(function (snapshot) {
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
    return this.observeSnapshot(options).pipe(map(function (snapshot) {
        return snapshot.data(options);
    }));
}
function observeSnapshot(options) {
    var _this = this;
    return new Observable(function (subscriber) {
        var unsubscribe = _this.onSnapshot(options || {}, subscriber);
        return function () { return unsubscribe(); };
    });
}
export function loadDoc() {
    firestore.Firestore.prototype.observeDocData = observeDocData;
    firestore.Firestore.prototype.observeDoc = observeDoc;
    firestore.DocumentReference.prototype.observeData = observeData;
    firestore.DocumentReference.prototype.observeSnapshot = observeSnapshot;
}
//# sourceMappingURL=doc-observable.js.map