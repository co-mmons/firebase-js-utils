"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firestore_1 = require("../firestore");
var operators_1 = require("rxjs/operators");
function docDataObservable(doc, options) {
    var _this = this;
    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }
    return this.realAngularFirestore.doc(doc.path).valueChanges().pipe(operators_1.map(function (data) {
        if (options && options.serializer) {
            return _this.unserialize(data, options.serializer, options.serializationOptions);
        }
        return data;
    }));
}
firestore_1.UniversalFirestoreAngularImpl.prototype.docDataObservable = docDataObservable;
//# sourceMappingURL=doc-data-observable.js.map