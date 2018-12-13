import { ArraySerializer } from "@co.mmons/js-utils/json";
import { map } from "rxjs/operators";
import { UniversalFirestoreAngularImpl } from "../firestore";
function docsDataObservable(collectionPathOrQuery, options) {
    var _this = this;
    if (typeof collectionPathOrQuery == "string") {
        return this.docDataObservable(this.doc(collectionPathOrQuery), options);
    }
    if (!collectionPathOrQuery["path"]) {
        throw new Error("Not supported object: " + collectionPathOrQuery);
    }
    return this.realAngularFirestore.collection(collectionPathOrQuery["path"], function () { return collectionPathOrQuery; }).valueChanges().pipe(map(function (data) {
        if (options && options.serializer) {
            return _this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
        }
        return data;
    }));
}
UniversalFirestoreAngularImpl.prototype.docsDataObservable = docsDataObservable;
//# sourceMappingURL=docs-data-observable.js.map