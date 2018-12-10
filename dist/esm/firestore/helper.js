import { Serializer, unserialize } from "@co.mmons/js-utils/json";
var FirestoreHelper = /** @class */ (function () {
    function FirestoreHelper() {
    }
    FirestoreHelper.prototype.unserialize = function (json, targetClassOrSerializer, options) {
        if (targetClassOrSerializer instanceof Serializer) {
            return targetClassOrSerializer.unserialize(json);
        }
        return unserialize(json, targetClassOrSerializer, options);
    };
    return FirestoreHelper;
}());
export { FirestoreHelper };
//# sourceMappingURL=helper.js.map