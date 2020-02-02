import {packages} from "../config";
import {firestoreClientTypes, firestoreAdminTypes} from "./types";
import {isFirebaseClient, isFirebaseAdmin} from "../mode";

let admin: typeof firestoreAdminTypes;

export function isFirestoreClient() {
    return isFirebaseClient();
}

export function firestoreClient(): typeof firestoreClientTypes {

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

export function firestoreAdmin(): typeof firestoreAdminTypes {

    if (isFirebaseAdmin()) {
        const pckg = packages.firestore;
        if (!pckg) {
            throw new Error("Firestore package not configured");
        }

        return pckg;
    }

    throw new Error("Firebase not running in admin mode");
}
