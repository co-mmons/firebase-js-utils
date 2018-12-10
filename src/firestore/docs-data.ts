import {ArraySerializer} from "@co.mmons/js-utils/json";
import {FirestoreHelper} from "./helper";
import {SerializationOptions} from "./serialization-options";
import {GetOptions, Query, SnapshotOptions} from "./types";

async function docsData<V = any>(this: FirestoreHelper, collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V[]> {

    let data: V[] = [];

    for (let d of (await this.docs(collectionPathOrQuery))) {
        data.push(d.data(options) as V);
    }

    if (options && options.serializer) {
        return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
    }

    return data;
}

declare module "./helper" {

    interface FirestoreHelper {
        docsData<V = any>(collectionPathOrQuery: string | Query, options?: GetOptions & SnapshotOptions & SerializationOptions): Promise<V[]>;
    }

}

FirestoreHelper.prototype.docsData = docsData;