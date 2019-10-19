"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@co.mmons/js-utils/core");
const json_1 = require("@co.mmons/js-utils/json");
const extract_get_options_1 = require("./extract-get-options");
const extract_snapshot_options_1 = require("./extract-snapshot-options");
class UniversalFirestore {
    /**
     * Creates new, randomly generated id.s
     */
    createId() {
        return this.collection("_").doc().id;
    }
    serialize(data, options) {
        return json_1.serialize(data, options);
    }
    unserialize(json, targetClassOrSerializer, options) {
        if (targetClassOrSerializer instanceof json_1.Serializer) {
            return targetClassOrSerializer.unserialize(json);
        }
        return json_1.unserialize(json, targetClassOrSerializer, options);
    }
    docData(doc, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof doc == "string") {
                return this.docData(this.doc(doc), options);
            }
            let data = (yield doc.get(extract_get_options_1.extractGetOptions(options))).data(extract_snapshot_options_1.extractSnapshotOptions(options));
            if (options && options.serializer) {
                return this.unserialize(data, options.serializer, options.serializationOptions);
            }
            return data;
        });
    }
    docsData(collectionPathOrQuery, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = [];
            for (let d of (yield this.docsSnapshots(collectionPathOrQuery, options))) {
                data.push(d.data(extract_snapshot_options_1.extractSnapshotOptions(options)));
            }
            if (options && options.serializer) {
                return this.unserialize(data, new json_1.ArraySerializer(options.serializer), options.serializationOptions);
            }
            return data;
        });
    }
    docsSnapshots(collectionPathOrQuery, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof collectionPathOrQuery == "string") {
                return this.docsSnapshots(this.collection(collectionPathOrQuery), options);
            }
            return (yield collectionPathOrQuery.get(extract_get_options_1.extractGetOptions(options))).docs;
        });
    }
    deleteQuery(query, batchSize) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield core_1.sleep(50);
            return snapshot.size + (yield this.deleteQuery(query, batchSize));
        });
    }
}
exports.UniversalFirestore = UniversalFirestore;
//# sourceMappingURL=firestore.js.map