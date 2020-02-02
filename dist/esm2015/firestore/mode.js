import { packages } from "../config";
import { isFirebaseClient, isFirebaseAdmin } from "../mode";
let admin;
export function isFirestoreClient() {
    return isFirebaseClient();
}
export function firestoreClient() {
    if (isFirebaseClient()) {
        const pckg = packages.firestore;
        if (!pckg) {
            throw new Error("Firestore package not configured");
        }
        return pckg;
    }
    throw new Error("Firebase not running in client mode");
}
export function isFirestoreAdmin() {
    return isFirebaseAdmin();
}
export function firestoreAdmin() {
    if (isFirebaseAdmin()) {
        const pckg = packages.firestore;
        if (!pckg) {
            throw new Error("Firestore package not configured");
        }
        return pckg;
    }
    throw new Error("Firebase not running in admin mode");
}
//# sourceMappingURL=mode.js.map