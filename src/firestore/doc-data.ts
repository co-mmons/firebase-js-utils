import {DocumentReference, GetOptions, SnapshotOptions} from "./types";
import {SerializationOptions} from "./serialization-options";
import {UniversalFirestore} from "./firestore";

async function docData<V = any> (this: UniversalFirestore, doc: string | DocumentReference, options ?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V> {

    if(typeof doc == "string") {
        return this.docData<V>(this.doc(doc), options);
    }

    let data = (await doc.get(options)).data(options);

    if (options && options.serializer) {
        return this.unserialize(data, options.serializer, options.serializationOptions);
    }

    return data as V;
}

declare module "./firestore" {

    interface UniversalFirestore {

        docData<V = any>(doc: string | DocumentReference, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V>;
    }

}

UniversalFirestore.prototype.docData = docData;
