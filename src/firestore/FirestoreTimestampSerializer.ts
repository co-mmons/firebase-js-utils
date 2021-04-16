import {AssignableType} from "@co.mmons/js-utils/core";
import {SerializationOptions, Serializer} from "@co.mmons/js-utils/json";

export class FirestoreTimestampSerializer extends Serializer {

    constructor(private readonly timestampClass: AssignableType) {
        super();
    }

    unserialize(json: any, options?: SerializationOptions): any {

        if (this.isUndefinedOrNull(json)) {
            return this.unserializeUndefinedOrNull(json);
        } else if (json instanceof this.timestampClass) {
            return json;
        } else if (typeof json === "object" && typeof json["seconds"] === "number" && json["nanoseconds"] === "number") {
            new this.timestampClass(json["seconds"], json["nanoseconds"]);
        } else {
            throw new Error(`Cannot unserialize "${json}" to Firestore Timestamp`);
        }

    }

    serialize(object: any, options?: SerializationOptions): any {
        if (this.isUndefinedOrNull(object)) {
            return this.serializeUndefinedOrNull(object);
        } else if (object instanceof this.timestampClass) {
            return object;
        } else {
            throw new Error(`Cannot serialize "${object}" as Firestore Timestamp`);
        }
    }

}