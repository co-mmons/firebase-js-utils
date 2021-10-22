"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryDocumentSnapshot = exports.WriteBatch = exports.GeoPoint = exports.Timestamp = exports.FieldPath = exports.FieldValue = exports.DocumentSnapshot = exports.Transaction = exports.Query = exports.CollectionReference = exports.DocumentReference = exports.Firestore = void 0;
const mode_1 = require("./mode");
var Firestore;
(function (Firestore) {
    function isClient(firestore) {
        return (0, mode_1.isFirestoreClient)() && firestore instanceof (0, mode_1.firestoreClientModule)().Firestore;
    }
    Firestore.isClient = isClient;
    function isAdmin(firestore) {
        return (0, mode_1.isFirestoreAdmin)() && firestore instanceof (0, mode_1.firestoreAdminModule)().Firestore;
    }
    Firestore.isAdmin = isAdmin;
})(Firestore = exports.Firestore || (exports.Firestore = {}));
var DocumentReference;
(function (DocumentReference) {
    function isClient(documentRef) {
        return (0, mode_1.isFirestoreClient)() && documentRef instanceof (0, mode_1.firestoreClientModule)().DocumentReference;
    }
    DocumentReference.isClient = isClient;
    function isAdmin(documentRef) {
        return (0, mode_1.isFirestoreAdmin)() && documentRef instanceof (0, mode_1.firestoreAdminModule)().DocumentReference;
    }
    DocumentReference.isAdmin = isAdmin;
})(DocumentReference = exports.DocumentReference || (exports.DocumentReference = {}));
var CollectionReference;
(function (CollectionReference) {
    function isClient(collectionRef) {
        return (0, mode_1.isFirestoreClient)() && collectionRef instanceof (0, mode_1.firestoreClientModule)().CollectionReference;
    }
    CollectionReference.isClient = isClient;
    function isAdmin(collectionRef) {
        return (0, mode_1.isFirestoreAdmin)() && collectionRef instanceof (0, mode_1.firestoreAdminModule)().CollectionReference;
    }
    CollectionReference.isAdmin = isAdmin;
})(CollectionReference = exports.CollectionReference || (exports.CollectionReference = {}));
var Query;
(function (Query) {
    function isClient(query) {
        return (0, mode_1.isFirestoreClient)() && query instanceof (0, mode_1.firestoreClientModule)().Query;
    }
    Query.isClient = isClient;
    function isAdmin(query) {
        return (0, mode_1.isFirestoreAdmin)() && query instanceof (0, mode_1.firestoreAdminModule)().Query;
    }
    Query.isAdmin = isAdmin;
})(Query = exports.Query || (exports.Query = {}));
var Transaction;
(function (Transaction) {
    function isClient(transaction) {
        return (0, mode_1.isFirestoreClient)() && transaction instanceof (0, mode_1.firestoreClientModule)().Transaction;
    }
    Transaction.isClient = isClient;
    function isAdmin(transaction) {
        return (0, mode_1.isFirestoreAdmin)() && transaction instanceof (0, mode_1.firestoreAdminModule)().Transaction;
    }
    Transaction.isAdmin = isAdmin;
})(Transaction = exports.Transaction || (exports.Transaction = {}));
var DocumentSnapshot;
(function (DocumentSnapshot) {
    function is(value) {
        if ((0, mode_1.isFirestoreClient)()) {
            return value instanceof (0, mode_1.firestoreClientModule)().DocumentSnapshot;
        }
        else if ((0, mode_1.isFirestoreAdmin)()) {
            return value instanceof (0, mode_1.firestoreAdminModule)().DocumentSnapshot;
        }
        return false;
    }
    DocumentSnapshot.is = is;
    function isClient(snapshot) {
        return (0, mode_1.isFirestoreClient)() && snapshot instanceof (0, mode_1.firestoreClientModule)().Transaction;
    }
    DocumentSnapshot.isClient = isClient;
    function isAdmin(snapshot) {
        return snapshot instanceof (0, mode_1.firestoreAdminModule)().Transaction;
    }
    DocumentSnapshot.isAdmin = isAdmin;
})(DocumentSnapshot = exports.DocumentSnapshot || (exports.DocumentSnapshot = {}));
var FieldValue;
(function (FieldValue) {
    function isClient(value) {
        return (0, mode_1.isFirestoreClient)() && value instanceof (0, mode_1.firestoreClientModule)().FieldValue;
    }
    FieldValue.isClient = isClient;
    function isAdmin(value) {
        return (0, mode_1.isFirestoreAdmin)() && value instanceof (0, mode_1.firestoreAdminModule)().FieldValue;
    }
    FieldValue.isAdmin = isAdmin;
})(FieldValue = exports.FieldValue || (exports.FieldValue = {}));
var FieldPath;
(function (FieldPath) {
    function isClient(value) {
        return (0, mode_1.isFirestoreClient)() && value instanceof (0, mode_1.firestoreClientModule)().FieldPath;
    }
    FieldPath.isClient = isClient;
    function isAdmin(value) {
        return (0, mode_1.isFirestoreAdmin)() && value instanceof (0, mode_1.firestoreAdminModule)().FieldPath;
    }
    FieldPath.isAdmin = isAdmin;
})(FieldPath = exports.FieldPath || (exports.FieldPath = {}));
var Timestamp;
(function (Timestamp) {
    function isClient(value) {
        return (0, mode_1.isFirestoreClient)() && value instanceof (0, mode_1.firestoreClientModule)().Timestamp;
    }
    Timestamp.isClient = isClient;
    function isAdmin(value) {
        return (0, mode_1.isFirestoreAdmin)() && value instanceof (0, mode_1.firestoreAdminModule)().Timestamp;
    }
    Timestamp.isAdmin = isAdmin;
})(Timestamp = exports.Timestamp || (exports.Timestamp = {}));
var GeoPoint;
(function (GeoPoint) {
    function isClient(value) {
        return (0, mode_1.isFirestoreClient)() && value instanceof (0, mode_1.firestoreClientModule)().GeoPoint;
    }
    GeoPoint.isClient = isClient;
    function isAdmin(value) {
        return (0, mode_1.isFirestoreAdmin)() && value instanceof (0, mode_1.firestoreAdminModule)().GeoPoint;
    }
    GeoPoint.isAdmin = isAdmin;
})(GeoPoint = exports.GeoPoint || (exports.GeoPoint = {}));
var WriteBatch;
(function (WriteBatch) {
    function isClient(value) {
        return (0, mode_1.isFirestoreClient)() && value instanceof (0, mode_1.firestoreClientModule)().WriteBatch;
    }
    WriteBatch.isClient = isClient;
    function isAdmin(value) {
        return (0, mode_1.isFirestoreAdmin)() && value instanceof (0, mode_1.firestoreAdminModule)().WriteBatch;
    }
    WriteBatch.isAdmin = isAdmin;
})(WriteBatch = exports.WriteBatch || (exports.WriteBatch = {}));
var QueryDocumentSnapshot;
(function (QueryDocumentSnapshot) {
    function is(value) {
        if ((0, mode_1.isFirestoreClient)()) {
            return value instanceof (0, mode_1.firestoreClientModule)().QueryDocumentSnapshot;
        }
        else if ((0, mode_1.isFirestoreAdmin)()) {
            return value instanceof (0, mode_1.firestoreAdminModule)().QueryDocumentSnapshot;
        }
        return false;
    }
    QueryDocumentSnapshot.is = is;
    function isClient(value) {
        return (0, mode_1.isFirestoreClient)() && value instanceof (0, mode_1.firestoreClientModule)().QueryDocumentSnapshot;
    }
    QueryDocumentSnapshot.isClient = isClient;
    function isAdmin(value) {
        return (0, mode_1.isFirestoreAdmin)() && value instanceof (0, mode_1.firestoreAdminModule)().QueryDocumentSnapshot;
    }
    QueryDocumentSnapshot.isAdmin = isAdmin;
})(QueryDocumentSnapshot = exports.QueryDocumentSnapshot || (exports.QueryDocumentSnapshot = {}));
//# sourceMappingURL=union-types.js.map