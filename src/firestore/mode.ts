import {firestoreClientTypes, firestoreAdminTypes} from "./types";
import {isFirebaseClient, isFirebaseAdmin} from "../mode";

let client: typeof firestoreClientTypes;
let admin: typeof firestoreAdminTypes;

export function isFirestoreClient() {
    return isFirebaseClient();
}

export function firestoreClient() {
    return client;
}

export function isFirestoreAdmin() {
    return isFirebaseAdmin();
}

export function firestoreAdmin() {
    return admin;
}
