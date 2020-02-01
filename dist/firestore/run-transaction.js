"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function runTransaction(firestore, updateFunction) {
    if (firestore instanceof types_1.firestoreClient.FirebaseFirestore) {
        return firestore.runTransaction(updateFunction);
    }
    else if (firestore instanceof types_1.firestoreAdmin.Firestore) {
        return firestore.runTransaction(updateFunction);
    }
    else {
        throw new Error("Invalid Firestore instance");
    }
}
exports.runTransaction = runTransaction;
//# sourceMappingURL=run-transaction.js.map