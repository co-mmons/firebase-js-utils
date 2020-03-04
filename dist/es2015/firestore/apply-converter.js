"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const union_types_1 = require("./union-types");
function applyConverter(applicable, converter) {
    if (union_types_1.DocumentReference.isClient(applicable) || union_types_1.DocumentReference.isAdmin(applicable)) {
        return applyDocumentReference(applicable, converter);
    }
    else if (union_types_1.CollectionReference.isClient(applicable) || union_types_1.CollectionReference.isAdmin(applicable)) {
        return applyCollectionReference(applicable, converter);
    }
    else if (union_types_1.Query.isClient(applicable) || union_types_1.Query.isAdmin(applicable)) {
        return applyQuery(applicable, converter);
    }
    else {
        throw new Error("DocumentReference, CollectionReference or Query must be given");
    }
}
exports.applyConverter = applyConverter;
function applyDocumentReference(ref, converter) {
    if (union_types_1.DocumentReference.isClient(ref)) {
        return ref.withConverter(converter);
    }
    else if (union_types_1.DocumentReference.isAdmin(ref)) {
        return ref.withConverter(converter);
    }
}
function applyCollectionReference(ref, converter) {
    if (union_types_1.CollectionReference.isClient(ref)) {
        return ref.withConverter(converter);
    }
    else if (union_types_1.CollectionReference.isAdmin(ref)) {
        return ref.withConverter(converter);
    }
}
function applyQuery(query, converter) {
    if (union_types_1.Query.isClient(query)) {
        return query.withConverter(converter);
    }
    else if (union_types_1.Query.isAdmin(query)) {
        return query.withConverter(converter);
    }
}
//# sourceMappingURL=apply-converter.js.map