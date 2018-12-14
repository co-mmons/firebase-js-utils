"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_1 = require("@co.mmons/js-utils/json");
var operators_1 = require("rxjs/operators");
var firestore_1 = require("../firestore");
function docsDataObservable(collectionPathOrQuery, options) {
    var _this = this;
    if (typeof collectionPathOrQuery == "string") {
        return this.docsDataObservable(this.collection(collectionPathOrQuery), options);
    }
    if (!collectionPathOrQuery["path"]) {
        throw new Error("Not supported object: " + collectionPathOrQuery);
    }
    return this.realAngularFirestore.collection(collectionPathOrQuery["path"], function () { return collectionPathOrQuery; }).valueChanges().pipe(operators_1.map(function (data) {
        if (options && options.serializer) {
            return _this.unserialize(data, new json_1.ArraySerializer(options.serializer), options.serializationOptions);
        }
        return data;
    }));
}
firestore_1.UniversalFirestoreAngularImpl.prototype.docsDataObservable = docsDataObservable;
//# sourceMappingURL=docs-data-observable.js.map