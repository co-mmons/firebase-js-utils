import { Serializer, unserialize } from "@co.mmons/js-utils/json";
var AbstractFirestore = /** @class */ (function () {
    function AbstractFirestore() {
    }
    AbstractFirestore.prototype.unserialize = function (json, targetClassOrSerializer, options) {
        if (targetClassOrSerializer instanceof Serializer) {
            return targetClassOrSerializer.unserialize(json);
        }
        return unserialize(json, targetClassOrSerializer, options);
    };
    return AbstractFirestore;
}());
export { AbstractFirestore };
//# sourceMappingURL=firestore.js.map