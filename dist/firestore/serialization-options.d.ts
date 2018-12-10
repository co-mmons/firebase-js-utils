import { Type } from "@co.mmons/js-utils/core";
import { Serializer, SerializationOptions as JsonSerializationOptions } from "@co.mmons/js-utils/json";
export interface SerializationOptions {
    serializer?: Type<any> | Serializer;
    serializationOptions: JsonSerializationOptions;
}
