import { AssignableType } from "@co.mmons/js-utils/core";
import { SerializationOptions, Serializer } from "@co.mmons/js-utils/json";
export declare class FirestoreTimestampSerializer extends Serializer {
    private readonly timestampClass;
    constructor(timestampClass: AssignableType);
    unserialize(json: any, options?: SerializationOptions): any;
    serialize(object: any, options?: SerializationOptions): any;
}
