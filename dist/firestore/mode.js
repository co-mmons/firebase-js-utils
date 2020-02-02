"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const mode_1 = require("../mode");
let admin;
function isFirestoreClient() {
    return mode_1.isFirebaseClient();
}
exports.isFirestoreClient = isFirestoreClient;
function firestoreClient() {
    if (mode_1.isFirebaseClient()) {
        const pckg = config_1.packages.firestore;
        if (!pckg) {
            throw new Error("Firestore package not configured");
        }
        return pckg;
    }
    throw new Error("Firebase not running in client mode");
}
exports.firestoreClient = firestoreClient;
function isFirestoreAdmin() {
    return mode_1.isFirebaseAdmin();
}
exports.isFirestoreAdmin = isFirestoreAdmin;
function firestoreAdmin() {
    if (mode_1.isFirebaseAdmin()) {
        const pckg = config_1.packages.firestore;
        if (!pckg) {
            throw new Error("Firestore package not configured");
        }
        return pckg;
    }
    throw new Error("Firebase not running in admin mode");
}
exports.firestoreAdmin = firestoreAdmin;
//# sourceMappingURL=mode.js.map