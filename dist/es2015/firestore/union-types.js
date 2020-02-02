"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mode_1 = require("./mode");
var Firestore;
(function (Firestore) {
    function isClient(firestore) {
        return mode_1.isFirestoreClient() && firestore instanceof mode_1.firestoreClient().Firestore;
    }
    Firestore.isClient = isClient;
    function isAdmin(firestore) {
        return mode_1.isFirestoreAdmin() && firestore instanceof mode_1.firestoreAdmin().DocumentReference;
    }
    Firestore.isAdmin = isAdmin;
})(Firestore = exports.Firestore || (exports.Firestore = {}));
var DocumentReference;
(function (DocumentReference) {
    function isClient(documentRef) {
        return mode_1.isFirestoreClient() && documentRef instanceof mode_1.firestoreClient().DocumentReference;
    }
    DocumentReference.isClient = isClient;
    function isAdmin(documentRef) {
        return mode_1.isFirestoreAdmin() && documentRef instanceof mode_1.firestoreAdmin().DocumentReference;
    }
    DocumentReference.isAdmin = isAdmin;
})(DocumentReference = exports.DocumentReference || (exports.DocumentReference = {}));
var CollectionReference;
(function (CollectionReference) {
    function isClient(collectionRef) {
        return mode_1.isFirestoreClient() && collectionRef instanceof mode_1.firestoreClient().CollectionReference;
    }
    CollectionReference.isClient = isClient;
    function isAdmin(collectionRef) {
        return mode_1.isFirestoreAdmin() && collectionRef instanceof mode_1.firestoreAdmin().CollectionReference;
    }
    CollectionReference.isAdmin = isAdmin;
})(CollectionReference = exports.CollectionReference || (exports.CollectionReference = {}));
var Query;
(function (Query) {
    function isClient(query) {
        return mode_1.isFirestoreClient() && query instanceof mode_1.firestoreClient().Query;
    }
    Query.isClient = isClient;
    function isAdmin(query) {
        return mode_1.isFirestoreAdmin() && query instanceof mode_1.firestoreAdmin().Query;
    }
    Query.isAdmin = isAdmin;
})(Query = exports.Query || (exports.Query = {}));
var Transaction;
(function (Transaction) {
    function isClient(transaction) {
        return mode_1.isFirestoreClient() && transaction instanceof mode_1.firestoreClient().Transaction;
    }
    Transaction.isClient = isClient;
    function isAdmin(transaction) {
        return mode_1.isFirestoreAdmin() && transaction instanceof mode_1.firestoreAdmin().Transaction;
    }
    Transaction.isAdmin = isAdmin;
})(Transaction = exports.Transaction || (exports.Transaction = {}));
var DocumentSnapshot;
(function (DocumentSnapshot) {
    function isClient(snapshot) {
        return mode_1.isFirestoreClient() && snapshot instanceof mode_1.firestoreClient().Transaction;
    }
    DocumentSnapshot.isClient = isClient;
    function isAdmin(snapshot) {
        return snapshot instanceof mode_1.firestoreAdmin().Transaction;
    }
    DocumentSnapshot.isAdmin = isAdmin;
})(DocumentSnapshot = exports.DocumentSnapshot || (exports.DocumentSnapshot = {}));
var FieldValue;
(function (FieldValue) {
    function isClient(value) {
        return mode_1.isFirestoreClient() && value instanceof mode_1.firestoreClient().FieldValue;
    }
    FieldValue.isClient = isClient;
    function isAdmin(value) {
        return mode_1.isFirestoreAdmin() && value instanceof mode_1.firestoreAdmin().FieldValue;
    }
    FieldValue.isAdmin = isAdmin;
})(FieldValue = exports.FieldValue || (exports.FieldValue = {}));
var FieldPath;
(function (FieldPath) {
    function isClient(value) {
        return mode_1.isFirestoreClient() && value instanceof mode_1.firestoreClient().FieldPath;
    }
    FieldPath.isClient = isClient;
    function isAdmin(value) {
        return mode_1.isFirestoreAdmin() && value instanceof mode_1.firestoreAdmin().FieldPath;
    }
    FieldPath.isAdmin = isAdmin;
})(FieldPath = exports.FieldPath || (exports.FieldPath = {}));
var Timestamp;
(function (Timestamp) {
    function isClient(value) {
        return mode_1.isFirestoreClient() && value instanceof mode_1.firestoreClient().Timestamp;
    }
    Timestamp.isClient = isClient;
    function isAdmin(value) {
        return mode_1.isFirestoreAdmin() && value instanceof mode_1.firestoreAdmin().Timestamp;
    }
    Timestamp.isAdmin = isAdmin;
})(Timestamp = exports.Timestamp || (exports.Timestamp = {}));
var GeoPoint;
(function (GeoPoint) {
    function isClient(value) {
        return mode_1.isFirestoreClient() && value instanceof mode_1.firestoreClient().GeoPoint;
    }
    GeoPoint.isClient = isClient;
    function isAdmin(value) {
        return mode_1.isFirestoreAdmin() && value instanceof mode_1.firestoreAdmin().GeoPoint;
    }
    GeoPoint.isAdmin = isAdmin;
})(GeoPoint = exports.GeoPoint || (exports.GeoPoint = {}));
var WriteBatch;
(function (WriteBatch) {
    function isClient(value) {
        return mode_1.isFirestoreClient() && value instanceof mode_1.firestoreClient().WriteBatch;
    }
    WriteBatch.isClient = isClient;
    function isAdmin(value) {
        return mode_1.isFirestoreAdmin() && value instanceof mode_1.firestoreAdmin().WriteBatch;
    }
    WriteBatch.isAdmin = isAdmin;
})(WriteBatch = exports.WriteBatch || (exports.WriteBatch = {}));
//# sourceMappingURL=union-types.js.map