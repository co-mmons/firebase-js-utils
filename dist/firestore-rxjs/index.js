"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../firestore");
var firestore_1 = require("../firestore");
require("./doc-observable");
var doc_observable_1 = require("./doc-observable");
require("./query-observable");
var query_observable_1 = require("./query-observable");
function extendFirestore() {
    firestore_1.extendFirestore();
    doc_observable_1.docLoaded;
    query_observable_1.queryLoaded;
}
exports.extendFirestore = extendFirestore;
//# sourceMappingURL=index.js.map