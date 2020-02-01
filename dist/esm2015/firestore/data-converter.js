import { serialize, unserialize } from "@co.mmons/js-utils/json";
export class DataConverter {
    constructor(type) {
        this.type = type;
    }
    fromFirestore(data) {
        return unserialize(data, this.type);
    }
    toFirestore(modelObject) {
        return serialize(modelObject);
    }
}
//# sourceMappingURL=data-converter.js.map