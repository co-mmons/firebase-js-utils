import { UniversalFirestoreAngularImpl } from "../firestore";
import { map } from "rxjs/operators";
function docDataObservable(doc, options) {
    var _this = this;
    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }
    return this.realAngularFirestore.doc(doc.path).valueChanges().pipe(map(function (data) {
        if (options && options.serializer) {
            return _this.unserialize(data, options.serializer, options.serializationOptions);
        }
        return data;
    }));
}
UniversalFirestoreAngularImpl.prototype.docDataObservable = docDataObservable;
//# sourceMappingURL=doc-data-observable.js.map