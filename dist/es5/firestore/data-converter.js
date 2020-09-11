"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataConverter = void 0;
var union_types_1 = require("./union-types");
var DataConverter = /** @class */ (function () {
    function DataConverter() {
    }
    /**
     * Called by the Firestore SDK to convert a custom model object of type T
     * into a plain Javascript object (suitable for writing directly to the
     * Firestore database).
     *
     * @final
     */
    DataConverter.prototype.toFirestore = function (modelObject) {
        return this.to(modelObject);
    };
    /**
     * @final
     */
    DataConverter.prototype.fromFirestore = function (dataOrSnapshot, options) {
        if (union_types_1.QueryDocumentSnapshot.is(dataOrSnapshot)) {
            return this.from(dataOrSnapshot.data(options));
        }
        else {
            return this.from(dataOrSnapshot);
        }
    };
    return DataConverter;
}());
exports.DataConverter = DataConverter;
//# sourceMappingURL=data-converter.js.map