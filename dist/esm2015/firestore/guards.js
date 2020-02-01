import { firestoreAdmin, firestoreClient } from "./types";
export function isFirestoreAdmin(firestore) {
    return firestore instanceof firestoreAdmin.Firestore;
}
export function isFirestoreClient(firestore) {
    return firestore instanceof firestoreClient.FirebaseFirestore;
}
//# sourceMappingURL=guards.js.map