import {Type} from "@co.mmons/js-utils/core";
import {serialize, unserialize} from "@co.mmons/js-utils/json";
import {DocumentData, FirestoreDataConverter} from "./shared-types";

export class DataConverter<T> implements FirestoreDataConverter<T> {

    constructor(private readonly type: Type<T>) {
    }

    fromFirestore(data: DocumentData): T {
        return unserialize(data, this.type);
    }

    toFirestore(modelObject: T): DocumentData {
        return serialize(modelObject);
    }

}
