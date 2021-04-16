import { Serializer } from "@co.mmons/js-utils/json";
export class FirestoreTimestampSerializer extends Serializer {
    constructor(timestampClass) {
        super();
        this.timestampClass = timestampClass;
    }
    unserialize(json, options) {
        if (this.isUndefinedOrNull(json)) {
            return this.unserializeUndefinedOrNull(json);
        }
        else if (json instanceof this.timestampClass) {
            return json;
        }
        else if (typeof json === "object" && typeof json["seconds"] === "number" && json["nanoseconds"] === "number") {
            new this.timestampClass(json["seconds"], json["nanoseconds"]);
        }
        else {
            throw new Error(`Cannot unserialize "${json}" to Firestore Timestamp`);
        }
    }
    serialize(object, options) {
        if (this.isUndefinedOrNull(object)) {
            return this.serializeUndefinedOrNull(object);
        }
        else if (object instanceof this.timestampClass) {
            return object;
        }
        else {
            throw new Error(`Cannot serialize "${object}" as Firestore Timestamp`);
        }
    }
}
//# sourceMappingURL=FirestoreTimestampSerializer.js.map