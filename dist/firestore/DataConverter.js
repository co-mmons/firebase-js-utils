"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataConverter = void 0;
class DataConverter {
    /**
     * Called by the Firestore SDK to convert a custom model object of type T
     * into a plain Javascript object (suitable for writing directly to the
     * Firestore database).
     *
     * @final
     */
    toFirestore(modelObject) {
        return this.to(modelObject);
    }
    /**
     * @final
     */
    fromFirestore(dataOrSnapshot, options) {
        if (typeof dataOrSnapshot.data === "function") {
            return this.from(dataOrSnapshot.data(options));
        }
        else {
            return this.from(dataOrSnapshot);
        }
    }
}
exports.DataConverter = DataConverter;
//# sourceMappingURL=DataConverter.js.map