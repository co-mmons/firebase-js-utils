import {FirebaseAdminModule} from "../FirebaseAdminModule";
import {FirebaseClientModule} from "../FirebaseClientModule";
import {DataConverter} from "./dataConverter";
import {CollectionReference, DocumentReference, Query} from "./union-types";

export function applyConverter<T>(documentRef: FirebaseClientModule.firestore.DocumentReference<any>, converter: DataConverter<T>): FirebaseClientModule.firestore.DocumentReference<T>;

export function applyConverter<T>(documentRef: FirebaseAdminModule.firestore.DocumentReference<any>, converter: DataConverter<T>): FirebaseAdminModule.firestore.DocumentReference<T>;

export function applyConverter<T>(documentRef: DocumentReference<any>, converter: DataConverter<T>): typeof documentRef extends FirebaseClientModule.firestore.DocumentReference ? FirebaseClientModule.firestore.DocumentReference : FirebaseAdminModule.firestore.DocumentReference<T>;

export function applyConverter<T>(collectionRef: FirebaseClientModule.firestore.CollectionReference<any>, converter: DataConverter<T>): FirebaseClientModule.firestore.CollectionReference<T>;

export function applyConverter<T>(collectionRef: FirebaseAdminModule.firestore.CollectionReference<any>, converter: DataConverter<T>): FirebaseAdminModule.firestore.CollectionReference<T>;

export function applyConverter<T>(collectionRef: CollectionReference<any>, converter: DataConverter<T>): typeof collectionRef extends FirebaseClientModule.firestore.CollectionReference ? FirebaseClientModule.firestore.CollectionReference<T> : FirebaseAdminModule.firestore.CollectionReference<T>;

export function applyConverter<T>(query: FirebaseClientModule.firestore.Query<any>, converter: DataConverter<T>): FirebaseClientModule.firestore.Query<T>;

export function applyConverter<T>(query: FirebaseAdminModule.firestore.Query<any>, converter: DataConverter<T>): FirebaseAdminModule.firestore.Query<T>;

export function applyConverter<T>(query: Query, converter: DataConverter<T>): typeof query extends FirebaseClientModule.firestore.Query<T> ? FirebaseClientModule.firestore.Query<T> : FirebaseAdminModule.firestore.Query<T>;

export function applyConverter<T, A extends DocumentReference<any> | Query<any> | CollectionReference<any>>(applicable: A, converter: DataConverter<T>): DocumentReference<T> | Query<T> | CollectionReference<T> {

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

function applyDocumentReference<T>(ref: DocumentReference<any>, converter: DataConverter<T>) {
    if (DocumentReference.isClient(ref)) {
        return ref.withConverter(converter);
    } else if (DocumentReference.isAdmin(ref)) {
        return ref.withConverter(converter);
    }
}

function applyCollectionReference<T>(ref: CollectionReference<any>, converter: DataConverter<T>) {
    if (CollectionReference.isClient(ref)) {
        return ref.withConverter(converter);
    } else if (CollectionReference.isAdmin(ref)) {
        return ref.withConverter(converter);
    }
}

function applyQuery<T>(query: Query<any>, converter: DataConverter<T>) {
    if (Query.isClient(query)) {
        return query.withConverter(converter);
    } else if (Query.isAdmin(query)) {
        return query.withConverter(converter);
    }
}
