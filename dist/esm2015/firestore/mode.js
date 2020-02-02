import { isFirebaseClient, isFirebaseAdmin } from "../mode";
let client;
let admin;
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
//# sourceMappingURL=mode.js.map