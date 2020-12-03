import { firestoreAdminModule, firestoreClientModule, isFirestoreAdmin, isFirestoreClient } from "./mode";
export var Firestore;
(function (Firestore) {
    function isClient(firestore) {
        return isFirestoreClient() && firestore instanceof firestoreClientModule().Firestore;
    }
    Firestore.isClient = isClient;
    function isAdmin(firestore) {
        return isFirestoreAdmin() && firestore instanceof firestoreAdminModule().Firestore;
    }
    Firestore.isAdmin = isAdmin;
})(Firestore || (Firestore = {}));
export var DocumentReference;
(function (DocumentReference) {
    function isClient(documentRef) {
        return isFirestoreClient() && documentRef instanceof firestoreClientModule().DocumentReference;
    }
    DocumentReference.isClient = isClient;
    function isAdmin(documentRef) {
        return isFirestoreAdmin() && documentRef instanceof firestoreAdminModule().DocumentReference;
    }
    DocumentReference.isAdmin = isAdmin;
})(DocumentReference || (DocumentReference = {}));
export var CollectionReference;
(function (CollectionReference) {
    function isClient(collectionRef) {
        return isFirestoreClient() && collectionRef instanceof firestoreClientModule().CollectionReference;
    }
    CollectionReference.isClient = isClient;
    function isAdmin(collectionRef) {
        return isFirestoreAdmin() && collectionRef instanceof firestoreAdminModule().CollectionReference;
    }
    CollectionReference.isAdmin = isAdmin;
})(CollectionReference || (CollectionReference = {}));
export var Query;
(function (Query) {
    function isClient(query) {
        return isFirestoreClient() && query instanceof firestoreClientModule().Query;
    }
    Query.isClient = isClient;
    function isAdmin(query) {
        return isFirestoreAdmin() && query instanceof firestoreAdminModule().Query;
    }
    Query.isAdmin = isAdmin;
})(Query || (Query = {}));
export var Transaction;
(function (Transaction) {
    function isClient(transaction) {
        return isFirestoreClient() && transaction instanceof firestoreClientModule().Transaction;
    }
    Transaction.isClient = isClient;
    function isAdmin(transaction) {
        return isFirestoreAdmin() && transaction instanceof firestoreAdminModule().Transaction;
    }
    Transaction.isAdmin = isAdmin;
})(Transaction || (Transaction = {}));
export var DocumentSnapshot;
(function (DocumentSnapshot) {
    function is(value) {
        if (isFirestoreClient()) {
            return value instanceof firestoreClientModule().DocumentSnapshot;
        }
        else if (isFirestoreAdmin()) {
            return value instanceof firestoreAdminModule().DocumentSnapshot;
        }
        return false;
    }
    DocumentSnapshot.is = is;
    function isClient(snapshot) {
        return isFirestoreClient() && snapshot instanceof firestoreClientModule().Transaction;
    }
    DocumentSnapshot.isClient = isClient;
    function isAdmin(snapshot) {
        return snapshot instanceof firestoreAdminModule().Transaction;
    }
    DocumentSnapshot.isAdmin = isAdmin;
})(DocumentSnapshot || (DocumentSnapshot = {}));
export var FieldValue;
(function (FieldValue) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClientModule().FieldValue;
    }
    FieldValue.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().FieldValue;
    }
    FieldValue.isAdmin = isAdmin;
})(FieldValue || (FieldValue = {}));
export var FieldPath;
(function (FieldPath) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClientModule().FieldPath;
    }
    FieldPath.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().FieldPath;
    }
    FieldPath.isAdmin = isAdmin;
})(FieldPath || (FieldPath = {}));
export var Timestamp;
(function (Timestamp) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClientModule().Timestamp;
    }
    Timestamp.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().Timestamp;
    }
    Timestamp.isAdmin = isAdmin;
})(Timestamp || (Timestamp = {}));
export var GeoPoint;
(function (GeoPoint) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClientModule().GeoPoint;
    }
    GeoPoint.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().GeoPoint;
    }
    GeoPoint.isAdmin = isAdmin;
})(GeoPoint || (GeoPoint = {}));
export var WriteBatch;
(function (WriteBatch) {
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClientModule().WriteBatch;
    }
    WriteBatch.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().WriteBatch;
    }
    WriteBatch.isAdmin = isAdmin;
})(WriteBatch || (WriteBatch = {}));
export var QueryDocumentSnapshot;
(function (QueryDocumentSnapshot) {
    function is(value) {
        if (isFirestoreClient()) {
            return value instanceof firestoreClientModule().QueryDocumentSnapshot;
        }
        else if (isFirestoreAdmin()) {
            return value instanceof firestoreAdminModule().QueryDocumentSnapshot;
        }
        return false;
    }
    QueryDocumentSnapshot.is = is;
    function isClient(value) {
        return isFirestoreClient() && value instanceof firestoreClientModule().QueryDocumentSnapshot;
    }
    QueryDocumentSnapshot.isClient = isClient;
    function isAdmin(value) {
        return isFirestoreAdmin() && value instanceof firestoreAdminModule().QueryDocumentSnapshot;
    }
    QueryDocumentSnapshot.isAdmin = isAdmin;
})(QueryDocumentSnapshot || (QueryDocumentSnapshot = {}));
//# sourceMappingURL=union-types.js.map