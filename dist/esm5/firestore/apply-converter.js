import { CollectionReference, DocumentReference, Query } from "./union-types";
export function applyConverter(applicable, converter) {
    if (DocumentReference.isClient(applicable) || DocumentReference.isAdmin(applicable)) {
        return applyDocumentReference(applicable, converter);
    }
    else if (CollectionReference.isClient(applicable) || CollectionReference.isAdmin(applicable)) {
        return applyCollectionReference(applicable, converter);
    }
    else if (Query.isClient(applicable) || Query.isAdmin(applicable)) {
        return applyQuery(applicable, converter);
    }
    else {
        throw new Error("DocumentReference, CollectionReference or Query must be given");
    }
}
function applyDocumentReference(ref, converter) {
    if (DocumentReference.isClient(ref)) {
        return ref.withConverter(converter);
    }
    else if (DocumentReference.isAdmin(ref)) {
        return ref.withConverter(converter);
    }
}
function applyCollectionReference(ref, converter) {
    if (CollectionReference.isClient(ref)) {
        return ref.withConverter(converter);
    }
    else if (CollectionReference.isAdmin(ref)) {
        return ref.withConverter(converter);
    }
}
function applyQuery(query, converter) {
    if (Query.isClient(query)) {
        return query.withConverter(converter);
    }
    else if (Query.isAdmin(query)) {
        return query.withConverter(converter);
    }
}
//# sourceMappingURL=apply-converter.js.map