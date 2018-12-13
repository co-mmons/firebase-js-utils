import {ArraySerializer} from "@co.mmons/js-utils/json";
import {UniversalFirestore} from "./firestore";
import {SerializationOptions} from "./serialization-options";
import {GetOptions, Query, SnapshotOptions} from "./types";

async function docsData<V = any>(this: UniversalFirestore, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V[]> {

    let data: V[] = [];

    for (let d of (await this.docsSnapshots(collectionPathOrQuery))) {
        data.push(d.data(options) as V);
    }

    if (options && options.serializer) {
        return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
    }

    return data;
}

declare module "./firestore" {

    interface UniversalFirestore {
        docsData<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V[]>;
    }

}

UniversalFirestore.prototype.docsData = docsData;