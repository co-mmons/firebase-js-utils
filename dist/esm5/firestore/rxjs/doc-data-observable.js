import { map } from "rxjs/operators";
import { extractSnapshotOptions } from "../extract-snapshot-options";
import { UniversalFirestore } from "../firestore";
function docDataObservable(doc, options) {
    var _this = this;
    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }
    var observable = this.docSnapshotObservable(doc, options).pipe(map(function (snapshot) {
        var data = snapshot.data(extractSnapshotOptions(options));
        if (options && options.serializer) {
            return _this.unserialize(data, options.serializer, options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
export function docDataObservableInject() {
    UniversalFirestore.prototype.docDataObservable = docDataObservable;
}
//# sourceMappingURL=doc-data-observable.js.map