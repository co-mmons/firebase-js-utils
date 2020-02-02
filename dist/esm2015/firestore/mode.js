import { modules } from "../config";
import { isFirebaseClient, isFirebaseAdmin } from "../mode";
export function isFirestoreClient() {
    return isFirebaseClient();
}
export function firestoreClientModule() {
    if (isFirebaseClient()) {
        const mod = modules.firestore;
        if (!mod) {
            throw new Error("Firestore module not configured");
        }
        return mod;
    }
    throw new Error("Firebase not running in client mode");
}
export function isFirestoreAdmin() {
    return isFirebaseAdmin();
}
export function firestoreAdminModule() {
    if (isFirebaseAdmin()) {
        const mod = modules.firestore;
        if (!mod) {
            throw new Error("Firestore module not configured");
        }
        return mod;
    }
    throw new Error("Firebase not running in admin mode");
}
export function firestoreModule() {
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
//# sourceMappingURL=mode.js.map