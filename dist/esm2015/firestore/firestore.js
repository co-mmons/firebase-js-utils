import * as tslib_1 from "tslib";
import { sleep } from "@co.mmons/js-utils/core";
import { ArraySerializer, serialize, Serializer, unserialize } from "@co.mmons/js-utils/json";
import { extractGetOptions } from "./extract-get-options";
import { extractSnapshotOptions } from "./extract-snapshot-options";
export class UniversalFirestore {
    /**
     * Creates new, randomly generated id.s
     */
    createId() {
        return this.collection("_").doc().id;
    }
    serialize(data, options) {
        return serialize(data, options);
    }
    unserialize(json, targetClassOrSerializer, options) {
        if (targetClassOrSerializer instanceof Serializer) {
            return targetClassOrSerializer.unserialize(json);
        }
        return unserialize(json, targetClassOrSerializer, options);
    }
    docData(doc, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (typeof doc == "string") {
                return this.docData(this.doc(doc), options);
            }
            let data = (yield doc.get(extractGetOptions(options))).data(extractSnapshotOptions(options));
            if (options && options.serializer) {
                return this.unserialize(data, options.serializer, options.serializationOptions);
            }
            return data;
        });
    }
    docsData(collectionPathOrQuery, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let data = [];
            for (let d of (yield this.docsSnapshots(collectionPathOrQuery, options))) {
                data.push(d.data(extractSnapshotOptions(options)));
            }
            if (options && options.serializer) {
                return this.unserialize(data, new ArraySerializer(options.serializer), options.serializationOptions);
            }
            return data;
        });
    }
    docsSnapshots(collectionPathOrQuery, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (typeof collectionPathOrQuery == "string") {
                return this.docsSnapshots(this.collection(collectionPathOrQuery), options);
            }
            return (yield collectionPathOrQuery.get(extractGetOptions(options))).docs;
        });
    }
    deleteQuery(query, batchSize) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!batchSize || batchSize < 1) {
                batchSize = 400;
            }
            const snapshot = yield query.limit(batchSize).get();
            // when there are no documents left, we are done
            if (snapshot.size == 0) {
                return 0;
            }
            const batch = this.batch();
            for (const doc of snapshot.docs) {
                batch.delete(doc.ref);
            }
            yield batch.commit();
            if (snapshot.size <= batchSize) {
                return snapshot.size;
            }
            yield sleep(50);
            return snapshot.size + (yield this.deleteQuery(query, batchSize));
        });
    }
}
//# sourceMappingURL=firestore.js.map