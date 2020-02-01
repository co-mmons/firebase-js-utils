import { firestoreAdmin, firestoreClient } from "./types";
export function runTransaction(firestore, updateFunction) {
    if (firestore instanceof firestoreClient.FirebaseFirestore) {
        return firestore.runTransaction(updateFunction);
    }
    else if (firestore instanceof firestoreAdmin.Firestore) {
        return firestore.runTransaction(updateFunction);
    }
    else {
        throw new Error("Invalid Firestore instance");
    }
}
//# sourceMappingURL=run-transaction.js.map