"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./declarations");
var collection_1 = require("./collection");
var doc_1 = require("./doc");
var query_1 = require("./query");
function extendFirestore() {
    collection_1.loadCollection();
    query_1.loadQuery();
    doc_1.loadDoc();
}
exports.extendFirestore = extendFirestore;
//# sourceMappingURL=index.js.map