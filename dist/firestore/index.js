"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFirestoreClient = exports.isFirestoreAdmin = exports.firestoreModule = exports.firestoreClientModule = exports.firestoreAdminModule = exports.docsSnapshots = exports.docsData = exports.docData = exports.deleteQuery = exports.DataConverter = exports.WriteBatch = exports.Transaction = exports.Timestamp = exports.QueryDocumentSnapshot = exports.Query = exports.GeoPoint = exports.Firestore = exports.FieldValue = exports.FieldPath = exports.DocumentSnapshot = exports.DocumentReference = exports.CollectionReference = exports.AutoWriteBatchClient = exports.AutoWriteBatchAdmin = exports.autoWriteBatch = exports.AutoWriteBatch = exports.applyConverter = void 0;
var applyConverter_1 = require("./applyConverter");
Object.defineProperty(exports, "applyConverter", { enumerable: true, get: function () { return applyConverter_1.applyConverter; } });
var autoWriteBatch_1 = require("./autoWriteBatch");
Object.defineProperty(exports, "AutoWriteBatch", { enumerable: true, get: function () { return autoWriteBatch_1.AutoWriteBatch; } });
Object.defineProperty(exports, "autoWriteBatch", { enumerable: true, get: function () { return autoWriteBatch_1.autoWriteBatch; } });
Object.defineProperty(exports, "AutoWriteBatchAdmin", { enumerable: true, get: function () { return autoWriteBatch_1.AutoWriteBatchAdmin; } });
Object.defineProperty(exports, "AutoWriteBatchClient", { enumerable: true, get: function () { return autoWriteBatch_1.AutoWriteBatchClient; } });
var union_types_1 = require("./union-types");
Object.defineProperty(exports, "CollectionReference", { enumerable: true, get: function () { return union_types_1.CollectionReference; } });
Object.defineProperty(exports, "DocumentReference", { enumerable: true, get: function () { return union_types_1.DocumentReference; } });
Object.defineProperty(exports, "DocumentSnapshot", { enumerable: true, get: function () { return union_types_1.DocumentSnapshot; } });
Object.defineProperty(exports, "FieldPath", { enumerable: true, get: function () { return union_types_1.FieldPath; } });
Object.defineProperty(exports, "FieldValue", { enumerable: true, get: function () { return union_types_1.FieldValue; } });
Object.defineProperty(exports, "Firestore", { enumerable: true, get: function () { return union_types_1.Firestore; } });
Object.defineProperty(exports, "GeoPoint", { enumerable: true, get: function () { return union_types_1.GeoPoint; } });
Object.defineProperty(exports, "Query", { enumerable: true, get: function () { return union_types_1.Query; } });
Object.defineProperty(exports, "QueryDocumentSnapshot", { enumerable: true, get: function () { return union_types_1.QueryDocumentSnapshot; } });
Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function () { return union_types_1.Timestamp; } });
Object.defineProperty(exports, "Transaction", { enumerable: true, get: function () { return union_types_1.Transaction; } });
Object.defineProperty(exports, "WriteBatch", { enumerable: true, get: function () { return union_types_1.WriteBatch; } });
var dataConverter_1 = require("./dataConverter");
Object.defineProperty(exports, "DataConverter", { enumerable: true, get: function () { return dataConverter_1.DataConverter; } });
var deleteQuery_1 = require("./deleteQuery");
Object.defineProperty(exports, "deleteQuery", { enumerable: true, get: function () { return deleteQuery_1.deleteQuery; } });
var docData_1 = require("./docData");
Object.defineProperty(exports, "docData", { enumerable: true, get: function () { return docData_1.docData; } });
var docsData_1 = require("./docsData");
Object.defineProperty(exports, "docsData", { enumerable: true, get: function () { return docsData_1.docsData; } });
var docsSnapshots_1 = require("./docsSnapshots");
Object.defineProperty(exports, "docsSnapshots", { enumerable: true, get: function () { return docsSnapshots_1.docsSnapshots; } });
var mode_1 = require("./mode");
Object.defineProperty(exports, "firestoreAdminModule", { enumerable: true, get: function () { return mode_1.firestoreAdminModule; } });
Object.defineProperty(exports, "firestoreClientModule", { enumerable: true, get: function () { return mode_1.firestoreClientModule; } });
Object.defineProperty(exports, "firestoreModule", { enumerable: true, get: function () { return mode_1.firestoreModule; } });
Object.defineProperty(exports, "isFirestoreAdmin", { enumerable: true, get: function () { return mode_1.isFirestoreAdmin; } });
Object.defineProperty(exports, "isFirestoreClient", { enumerable: true, get: function () { return mode_1.isFirestoreClient; } });
//# sourceMappingURL=index.js.map