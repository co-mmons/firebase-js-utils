"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_1 = require("@co.mmons/js-utils/json");
var FirestoreHelper = /** @class */ (function () {
    function FirestoreHelper() {
    }
    FirestoreHelper.prototype.unserialize = function (json, targetClassOrSerializer, options) {
        if (targetClassOrSerializer instanceof json_1.Serializer) {
            return targetClassOrSerializer.unserialize(json);
        }
        return json_1.unserialize(json, targetClassOrSerializer, options);
    };
    return FirestoreHelper;
}());
exports.FirestoreHelper = FirestoreHelper;
//# sourceMappingURL=helper.js.map