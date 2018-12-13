"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firestore_1 = require("../firestore");
var operators_1 = require("rxjs/operators");
function docDataObservable(doc, options) {
    var _this = this;
    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }
    var observable = this.docObservable(doc).pipe(operators_1.map(function (snapshot) {
        var data = snapshot.data();
        if (options && options.serializer) {
            return _this.unserialize(data, options.serializer, options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
firestore_1.UniversalFirestore.prototype.docDataObservable = docDataObservable;
//# sourceMappingURL=doc-data-observable.js.map