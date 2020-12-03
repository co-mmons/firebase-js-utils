import {modules} from "../config";
import {FirebaseAdminModule} from "../FirebaseAdminModule";
import {FirebaseClientModule} from "../FirebaseClientModule";
import {isFirebaseClient, isFirebaseAdmin} from "../mode";

export function isFirestoreClient() {
    return isFirebaseClient();
}

export function firestoreClientModule(): typeof FirebaseClientModule.firestore {

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

export function firestoreAdminModule(): typeof FirebaseAdminModule.firestore {

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
    } else if (isFirestoreAdmin()) {
        return firestoreAdminModule();
    } else {
        throw new Error("Firestore not configured");
    }
}
