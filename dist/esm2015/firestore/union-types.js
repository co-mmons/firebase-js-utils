import { firestoreAdmin, firestoreClient, isFirestoreAdmin, isFirestoreClient } from "./mode";
export var Firestore;
(function (Firestore) {
    function isClient(firestore) {
        return isFirestoreClient() && firestore instanceof firestoreClient().Firestore;
    }
    Firestore.isClient = isClient;
    function isAdmin(firestore) {
        return isFirestoreAdmin() && firestore instanceof firestoreAdmin().DocumentReference;
    }
    Firestore.isAdmin = isAdmin;
})(Firestore || (Firestore = {}));
export var DocumentReference;
(function (DocumentReference) {
    function isClient(documentRef) {
        return isFirestoreClient() && documentRef instanceof firestoreClient().DocumentReference;
    }
    DocumentReference.isClient = isClient;
    function isAdmin(documentRef) {
        return isFirestoreAdmin() && documentRef instanceof firestoreAdmin().DocumentReference;
    }
    DocumentReference.isAdmin = isAdmin;
})(DocumentReference || (DocumentReference = {}));
export var CollectionReference;
(function (CollectionReference) {
    function isClient(collectionRef) {
        return isFirestoreClient() && collectionRef instanceof firestoreClient().CollectionReference;
    }
    CollectionReference.isClient = isClient;
    function isAdmin(collectionRef) {
        return isFirestoreAdmin() && collectionRef instanceof firestoreAdmin().CollectionReference;
    }
    CollectionReference.isAdmin = isAdmin;
})(CollectionReference || (CollectionReference = {}));
export var Query;
(function (Query) {
    function isClient(query) {
        return isFirestoreClient() && query instanceof firestoreClient().Query;
    }
    Query.isClient = isClient;
    function isAdmin(query) {
        return isFirestoreAdmin() && query instanceof firestoreAdmin().Query;
    }
    Query.isAdmin = isAdmin;
})(Query || (Query = {}));
export var Transaction;
(function (Transaction) {
    function isClient(transaction) {
        return isFirestoreClient() && transaction instanceof firestoreClient().Transaction;
    }
    Transaction.isClient = isClient;
    function isAdmin(transaction) {
        return isFirestoreAdmin() && transaction instanceof firestoreAdmin().Transaction;
    }
    Transaction.isAdmin = isAdmin;
})(Transaction || (Transaction = {}));
export var DocumentSnapshot;
(function (DocumentSnapshot) {
    function isClient(snapshot) {
        return isFirestoreClient() && snapshot instanceof firestoreClient().Transaction;
    }
    DocumentSnapshot.isClient = isClient;
    function isAdmin(snapshot) {
        return snapshot instanceof firestoreAdmin().Transaction;
    }
    DocumentSnapshot.isAdmin = isAdmin;
})(DocumentSnapshot || (DocumentSnapshot = {}));
export var FieldValue;
(function (FieldValue) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClient().FieldValue;
    }
    FieldValue.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().FieldValue;
    }
    FieldValue.isAdmin = isAdmin;
})(FieldValue || (FieldValue = {}));
export var FieldPath;
(function (FieldPath) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClient().FieldPath;
    }
    FieldPath.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().FieldPath;
    }
    FieldPath.isAdmin = isAdmin;
})(FieldPath || (FieldPath = {}));
export var Timestamp;
(function (Timestamp) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClient().Timestamp;
    }
    Timestamp.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().Timestamp;
    }
    Timestamp.isAdmin = isAdmin;
})(Timestamp || (Timestamp = {}));
export var GeoPoint;
(function (GeoPoint) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClient().GeoPoint;
    }
    GeoPoint.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().GeoPoint;
    }
    GeoPoint.isAdmin = isAdmin;
})(GeoPoint || (GeoPoint = {}));
export var WriteBatch;
(function (WriteBatch) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClient().WriteBatch;
    }
    WriteBatch.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdmin().WriteBatch;
    }
    WriteBatch.isAdmin = isAdmin;
})(WriteBatch || (WriteBatch = {}));
//# sourceMappingURL=union-types.js.map