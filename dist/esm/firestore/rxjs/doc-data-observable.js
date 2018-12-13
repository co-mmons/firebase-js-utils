import { UniversalFirestore } from "../firestore";
import { map } from "rxjs/operators";
function docDataObservable(doc, options) {
    var _this = this;
    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }
    var observable = this.docObservable(doc).pipe(map(function (snapshot) {
        var data = snapshot.data();
        if (options && options.serializer) {
            return _this.unserialize(data, options.serializer, options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
UniversalFirestore.prototype.docDataObservable = docDataObservable;
//# sourceMappingURL=doc-data-observable.js.map