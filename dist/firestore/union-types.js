"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
var Firestore;
(function (Firestore) {
    function isClient(firestore) {
        return firestore instanceof types_1.firestoreClient.DocumentReference;
    }
    Firestore.isClient = isClient;
    function isAdmin(firestore) {
        return firestore instanceof types_1.firestoreAdmin.DocumentReference;
    }
    Firestore.isAdmin = isAdmin;
})(Firestore = exports.Firestore || (exports.Firestore = {}));
var DocumentReference;
(function (DocumentReference) {
    function isClient(documentRef) {
        return documentRef instanceof types_1.firestoreClient.DocumentReference;
    }
    DocumentReference.isClient = isClient;
    function isAdmin(documentRef) {
        return documentRef instanceof types_1.firestoreAdmin.DocumentReference;
    }
    DocumentReference.isAdmin = isAdmin;
})(DocumentReference = exports.DocumentReference || (exports.DocumentReference = {}));
var CollectionReference;
(function (CollectionReference) {
    function isClient(collectionRef) {
        return collectionRef instanceof types_1.firestoreClient.CollectionReference;
    }
    CollectionReference.isClient = isClient;
    function isAdmin(collectionRef) {
        return collectionRef instanceof types_1.firestoreAdmin.CollectionReference;
    }
    CollectionReference.isAdmin = isAdmin;
})(CollectionReference = exports.CollectionReference || (exports.CollectionReference = {}));
var Query;
(function (Query) {
    function isClient(query) {
        return query instanceof types_1.firestoreClient.Query;
    }
    Query.isClient = isClient;
    function isAdmin(query) {
        return query instanceof types_1.firestoreAdmin.Query;
    }
    Query.isAdmin = isAdmin;
})(Query = exports.Query || (exports.Query = {}));
var Transaction;
(function (Transaction) {
    function isClient(transaction) {
        return transaction instanceof types_1.firestoreClient.Transaction;
    }
    Transaction.isClient = isClient;
    function isAdmin(transaction) {
        return transaction instanceof types_1.firestoreAdmin.Transaction;
    }
    Transaction.isAdmin = isAdmin;
})(Transaction = exports.Transaction || (exports.Transaction = {}));
var DocumentSnapshot;
(function (DocumentSnapshot) {
    function isClient(snapshot) {
        return snapshot instanceof types_1.firestoreClient.Transaction;
    }
    DocumentSnapshot.isClient = isClient;
    function isAdmin(snapshot) {
        return snapshot instanceof types_1.firestoreAdmin.Transaction;
    }
    DocumentSnapshot.isAdmin = isAdmin;
})(DocumentSnapshot = exports.DocumentSnapshot || (exports.DocumentSnapshot = {}));
var FieldValue;
(function (FieldValue) {
    function isClient(value) {
        return value instanceof types_1.firestoreClient.FieldValue;
    }
    FieldValue.isClient = isClient;
    function isAdmin(value) {
        return value instanceof types_1.firestoreAdmin.FieldValue;
    }
    FieldValue.isAdmin = isAdmin;
})(FieldValue = exports.FieldValue || (exports.FieldValue = {}));
var FieldPath;
(function (FieldPath) {
    function isClient(value) {
        return value instanceof types_1.firestoreClient.FieldPath;
    }
    FieldPath.isClient = isClient;
    function isAdmin(value) {
        return value instanceof types_1.firestoreAdmin.FieldPath;
    }
    FieldPath.isAdmin = isAdmin;
})(FieldPath = exports.FieldPath || (exports.FieldPath = {}));
//# sourceMappingURL=union-types.js.map