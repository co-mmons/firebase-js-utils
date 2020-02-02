"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mode_1 = require("../mode");
let client;
let admin;
function isFirestoreClient() {
    return mode_1.isFirebaseClient();
}
exports.isFirestoreClient = isFirestoreClient;
function firestoreClient() {
    return client;
}
exports.firestoreClient = firestoreClient;
function isFirestoreAdmin() {
    return mode_1.isFirebaseAdmin();
}
exports.isFirestoreAdmin = isFirestoreAdmin;
function firestoreAdmin() {
    return admin;
}
exports.firestoreAdmin = firestoreAdmin;
//# sourceMappingURL=mode.js.map