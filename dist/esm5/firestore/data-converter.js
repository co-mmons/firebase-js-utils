import { serialize, unserialize } from "@co.mmons/js-utils/json";
var DataConverter = /** @class */ (function () {
    function DataConverter(type) {
        this.type = type;
    }
    DataConverter.prototype.fromFirestore = function (data) {
        return unserialize(data, this.type);
    };
    DataConverter.prototype.toFirestore = function (modelObject) {
        return serialize(modelObject);
    };
    return DataConverter;
}());
export { DataConverter };
//# sourceMappingURL=data-converter.js.map