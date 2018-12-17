import { Serializer, unserialize, serialize } from "@co.mmons/js-utils/json";
var UniversalFirestore = /** @class */ (function () {
    function UniversalFirestore() {
    }
    UniversalFirestore.prototype.createId = function () {
        return this.collection("_").doc().id;
    };
    UniversalFirestore.prototype.serialize = function (data, options) {
        return serialize(data, options);
    };
    UniversalFirestore.prototype.unserialize = function (json, targetClassOrSerializer, options) {
        if (targetClassOrSerializer instanceof Serializer) {
            return targetClassOrSerializer.unserialize(json);
        }
        return unserialize(json, targetClassOrSerializer, options);
    };
    return UniversalFirestore;
}());
export { UniversalFirestore };
//# sourceMappingURL=firestore.js.map