import {DocumentReference, GetOptions, SnapshotOptions} from "./types";
import {SerializationOptions} from "./serialization-options";
import {AbstractFirestore} from "./firestore";

async function docData<V = any> (this: AbstractFirestore, doc: string | DocumentReference, options ?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V> {

    if(typeof doc == "string") {
        return this.docData<V>(this.doc(doc), options);
    }

    let data = (await doc.get(options)).data(options);
}

declare module "./firestore" {

    interface AbstractFirestore {

        docData<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions): Promise<V>;
    }

}

AbstractFirestore.prototype.docData = docData;
