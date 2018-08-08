"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("../firestore");
var firestore_1 = require("../firestore");
require("./declarations");
__export(require("./doc-observable"));
var doc_observable_1 = require("./doc-observable");
var query_observable_1 = require("./query-observable");
__export(require("./query-observable"));
function extendFirestore() {
    firestore_1.extendFirestore();
    doc_observable_1.loadDoc();
    query_observable_1.loadQuery();
}
exports.extendFirestore = extendFirestore;
//# sourceMappingURL=index.js.map