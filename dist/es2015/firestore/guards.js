"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function isFirestoreAdmin(firestore) {
    return firestore instanceof types_1.firestoreAdmin.Firestore;
}
exports.isFirestoreAdmin = isFirestoreAdmin;
function isFirestoreClient(firestore) {
    return firestore instanceof types_1.firestoreClient.FirebaseFirestore;
}
exports.isFirestoreClient = isFirestoreClient;
//# sourceMappingURL=guards.js.map