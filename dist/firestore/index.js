"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./collection");
var collection_1 = require("./collection");
require("./doc");
var doc_1 = require("./doc");
require("./query");
var query_1 = require("./query");
function extendFirestore() {
    doc_1.docLoaded;
    query_1.queryLoaded;
    collection_1.collectionLoaded;
}
exports.extendFirestore = extendFirestore;
//# sourceMappingURL=index.js.map