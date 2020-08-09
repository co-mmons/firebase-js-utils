"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestoreModule = exports.firestoreAdminModule = exports.isFirestoreAdmin = exports.firestoreClientModule = exports.isFirestoreClient = void 0;
var config_1 = require("../config");
var mode_1 = require("../mode");
function isFirestoreClient() {
    return mode_1.isFirebaseClient();
}
exports.isFirestoreClient = isFirestoreClient;
function firestoreClientModule() {
    if (mode_1.isFirebaseClient()) {
        var mod = config_1.modules.firestore;
        if (!mod) {
            throw new Error("Firestore module not configured");
        }
        return mod;
    }
    throw new Error("Firebase not running in client mode");
}
exports.firestoreClientModule = firestoreClientModule;
function isFirestoreAdmin() {
    return mode_1.isFirebaseAdmin();
}
exports.isFirestoreAdmin = isFirestoreAdmin;
function firestoreAdminModule() {
    if (mode_1.isFirebaseAdmin()) {
        var mod = config_1.modules.firestore;
        if (!mod) {
            throw new Error("Firestore module not configured");
        }
        return mod;
    }
    throw new Error("Firebase not running in admin mode");
}
exports.firestoreAdminModule = firestoreAdminModule;
function firestoreModule() {
    if (isFirestoreClient()) {
        return firestoreClientModule();
    }
    else if (isFirestoreAdmin()) {
        return firestoreAdminModule();
    }
    else {
        throw new Error("Firestore not configured");
    }
}
exports.firestoreModule = firestoreModule;
//# sourceMappingURL=mode.js.map