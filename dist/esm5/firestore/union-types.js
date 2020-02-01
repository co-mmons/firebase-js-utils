import { firestoreClient, firestoreAdmin } from "./types";
export var Firestore;
(function (Firestore) {
    function isClient(firestore) {
        return firestore instanceof firestoreClient.DocumentReference;
    }
    Firestore.isClient = isClient;
    function isAdmin(firestore) {
        return firestore instanceof firestoreAdmin.DocumentReference;
    }
    Firestore.isAdmin = isAdmin;
})(Firestore || (Firestore = {}));
export var DocumentReference;
(function (DocumentReference) {
    function isClient(documentRef) {
        return documentRef instanceof firestoreClient.DocumentReference;
    }
    DocumentReference.isClient = isClient;
    function isAdmin(documentRef) {
        return documentRef instanceof firestoreAdmin.DocumentReference;
    }
    DocumentReference.isAdmin = isAdmin;
})(DocumentReference || (DocumentReference = {}));
export var CollectionReference;
(function (CollectionReference) {
    function isClient(collectionRef) {
        return collectionRef instanceof firestoreClient.CollectionReference;
    }
    CollectionReference.isClient = isClient;
    function isAdmin(collectionRef) {
        return collectionRef instanceof firestoreAdmin.CollectionReference;
    }
    CollectionReference.isAdmin = isAdmin;
})(CollectionReference || (CollectionReference = {}));
export var Query;
(function (Query) {
    function isClient(query) {
        return query instanceof firestoreClient.Query;
    }
    Query.isClient = isClient;
    function isAdmin(query) {
        return query instanceof firestoreAdmin.Query;
    }
    Query.isAdmin = isAdmin;
})(Query || (Query = {}));
export var Transaction;
(function (Transaction) {
    function isClient(transaction) {
        return transaction instanceof firestoreClient.Transaction;
    }
    Transaction.isClient = isClient;
    function isAdmin(transaction) {
        return transaction instanceof firestoreAdmin.Transaction;
    }
    Transaction.isAdmin = isAdmin;
})(Transaction || (Transaction = {}));
//# sourceMappingURL=union-types.js.map