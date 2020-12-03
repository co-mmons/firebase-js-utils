import { QueryDocumentSnapshot } from "./union-types";
export class DataConverter {
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
        if (QueryDocumentSnapshot.is(dataOrSnapshot)) {
            return this.from(dataOrSnapshot.data(options));
        }
        else {
            return this.from(dataOrSnapshot);
        }
    }
}
//# sourceMappingURL=dataConverter.js.map