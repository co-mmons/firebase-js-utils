import { map } from "rxjs/operators";
import { extractSnapshotOptions } from "../extract-snapshot-options";
import { UniversalFirestore } from "../firestore";
function docDataObservable(doc, options) {
    if (typeof doc == "string") {
        return this.docDataObservable(this.doc(doc), options);
    }
    let observable = this.docSnapshotObservable(doc, options).pipe(map(snapshot => {
        let data = snapshot.data(extractSnapshotOptions(options));
        if (options && options.serializer) {
            return this.unserialize(data, options.serializer, options.serializationOptions);
        }
        return data;
    }));
    return observable;
}
export function docDataObservableInject() {
    UniversalFirestore.prototype.docDataObservable = docDataObservable;
}
//# sourceMappingURL=doc-data-observable.js.map