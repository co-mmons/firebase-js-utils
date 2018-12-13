"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_1 = require("@co.mmons/js-utils/json");
var UniversalFirestore = /** @class */ (function () {
    function UniversalFirestore() {
    }
    UniversalFirestore.prototype.serialize = function (data, options) {
        return json_1.serialize(data, options);
    };
    UniversalFirestore.prototype.unserialize = function (json, targetClassOrSerializer, options) {
        if (targetClassOrSerializer instanceof json_1.Serializer) {
            return targetClassOrSerializer.unserialize(json);
        }
        return json_1.unserialize(json, targetClassOrSerializer, options);
    };
    return UniversalFirestore;
}());
exports.UniversalFirestore = UniversalFirestore;
//# sourceMappingURL=firestore.js.map