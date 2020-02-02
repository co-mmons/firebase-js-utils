import {FirestoreDataConverter} from "./shared-types";
import {CollectionReference, DocumentReference, Query} from "./union-types";
import {firestoreClientTypes, firestoreAdminTypes} from "./types";

export function applyConverter<T>(documentRef: firestoreClientTypes.DocumentReference<any>, converter: FirestoreDataConverter<T>): firestoreClientTypes.DocumentReference<T>;

export function applyConverter<T>(documentRef: firestoreAdminTypes.DocumentReference<any>, converter: FirestoreDataConverter<T>): firestoreAdminTypes.DocumentReference<T>;

export function applyConverter<T>(documentRef: DocumentReference<any>, converter: FirestoreDataConverter<T>): typeof documentRef extends firestoreClientTypes.DocumentReference ? firestoreClientTypes.DocumentReference : firestoreAdminTypes.DocumentReference<T>;

export function applyConverter<T>(collectionRef: firestoreClientTypes.CollectionReference<any>, converter: FirestoreDataConverter<T>): firestoreClientTypes.CollectionReference<T>;

export function applyConverter<T>(collectionRef: firestoreAdminTypes.CollectionReference<any>, converter: FirestoreDataConverter<T>): firestoreAdminTypes.CollectionReference<T>;

export function applyConverter<T>(collectionRef: CollectionReference<any>, converter: FirestoreDataConverter<T>): typeof collectionRef extends firestoreClientTypes.CollectionReference ? firestoreClientTypes.CollectionReference<T> : firestoreAdminTypes.CollectionReference<T>;

export function applyConverter<T>(query: firestoreClientTypes.Query<any>, converter: FirestoreDataConverter<T>): firestoreClientTypes.Query<T>;

export function applyConverter<T>(query: firestoreAdminTypes.Query<any>, converter: FirestoreDataConverter<T>): firestoreAdminTypes.Query<T>;

export function applyConverter<T>(query: Query, converter: FirestoreDataConverter<T>): typeof query extends firestoreClientTypes.Query<T> ? firestoreClientTypes.Query<T> : firestoreAdminTypes.Query<T>;

export function applyConverter<T, A extends DocumentReference<any> | Query<any> | CollectionReference<any>>(applicable: A, converter: FirestoreDataConverter<T>): DocumentReference<T> | Query<T> | CollectionReference<T> {

    if (DocumentReference.isClient(applicable as DocumentReference) || DocumentReference.isAdmin(applicable as DocumentReference)) {
        return applyDocumentReference(applicable as any, converter) as any;
    } else if (CollectionReference.isClient(applicable as CollectionReference) || CollectionReference.isAdmin(applicable as CollectionReference)) {
        return applyCollectionReference(applicable as any, converter) as any;
    } else if (Query.isClient(applicable as Query) || Query.isAdmin(applicable as Query)) {
        return applyQuery(applicable as any, converter) as any;
    } else {
        throw new Error("DocumentReference, CollectionReference or Query must be given");
    }
}

function applyDocumentReference<T>(ref: DocumentReference<any>, converter: FirestoreDataConverter<T>) {
    if (DocumentReference.isClient(ref)) {
        return ref.withConverter(converter);
    } else if (DocumentReference.isAdmin(ref)) {
        return ref.withConverter(converter);
    }
}

function applyCollectionReference<T>(ref: CollectionReference<any>, converter: FirestoreDataConverter<T>) {
    if (CollectionReference.isClient(ref)) {
        return ref.withConverter(converter);
    } else if (CollectionReference.isAdmin(ref)) {
        return ref.withConverter(converter);
    }
}

function applyQuery<T>(query: Query<any>, converter: FirestoreDataConverter<T>) {
    if (Query.isClient(query)) {
        return query.withConverter(converter);
    } else if (Query.isAdmin(query)) {
        return query.withConverter(converter);
    }
}
