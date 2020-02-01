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
export var DocumentSnapshot;
(function (DocumentSnapshot) {
    function isClient(snapshot) {
        return snapshot instanceof firestoreClient.Transaction;
    }
    DocumentSnapshot.isClient = isClient;
    function isAdmin(snapshot) {
        return snapshot instanceof firestoreAdmin.Transaction;
    }
    DocumentSnapshot.isAdmin = isAdmin;
})(DocumentSnapshot || (DocumentSnapshot = {}));
export var FieldValue;
(function (FieldValue) {
    function isClient(value) {
        return value instanceof firestoreClient.FieldValue;
    }
    FieldValue.isClient = isClient;
    function isAdmin(value) {
        return value instanceof firestoreAdmin.FieldValue;
    }
    FieldValue.isAdmin = isAdmin;
})(FieldValue || (FieldValue = {}));
export var FieldPath;
(function (FieldPath) {
    function isClient(value) {
        return value instanceof firestoreClient.FieldPath;
    }
    FieldPath.isClient = isClient;
    function isAdmin(value) {
        return value instanceof firestoreAdmin.FieldPath;
    }
    FieldPath.isAdmin = isAdmin;
})(FieldPath || (FieldPath = {}));
export var Timestamp;
(function (Timestamp) {
    function isClient(value) {
        return value instanceof firestoreClient.Timestamp;
    }
    Timestamp.isClient = isClient;
    function isAdmin(value) {
        return value instanceof firestoreAdmin.Timestamp;
    }
    Timestamp.isAdmin = isAdmin;
})(Timestamp || (Timestamp = {}));
export var GeoPoint;
(function (GeoPoint) {
    function isClient(value) {
        return value instanceof firestoreClient.GeoPoint;
    }
    GeoPoint.isClient = isClient;
    function isAdmin(value) {
        return value instanceof firestoreAdmin.GeoPoint;
    }
    GeoPoint.isAdmin = isAdmin;
})(GeoPoint || (GeoPoint = {}));
//# sourceMappingURL=union-types.js.map