"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("@co.mmons/js-utils/json");
class DataConverter {
    constructor(type) {
        this.type = type;
    }
    fromFirestore(data) {
        return json_1.unserialize(data, this.type);
    }
    toFirestore(modelObject) {
        return json_1.serialize(modelObject);
    }
}
exports.DataConverter = DataConverter;
//# sourceMappingURL=data-converter.js.map