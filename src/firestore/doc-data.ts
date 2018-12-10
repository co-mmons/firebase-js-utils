import {DocumentReference, GetOptions, SnapshotOptions} from "./types";
import {SerializationOptions} from "./serialization-options";
import {FirestoreHelper} from "./helper";

async function docData<V = any> (this: FirestoreHelper, doc: string | DocumentReference, options ?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V> {

    if(typeof doc == "string") {
        return this.docData<V>(this.doc(doc), options);
    }

    let data = (await doc.get(options)).data(options);
}

declare module "./helper" {

    interface FirestoreHelper {

        docData<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions): Promise<V>;
    }

}

FirestoreHelper.prototype.docData = docData;
