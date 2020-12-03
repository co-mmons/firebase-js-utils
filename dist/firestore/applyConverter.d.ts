import { FirebaseAdminModule } from "../FirebaseAdminModule";
import { FirebaseClientModule } from "../FirebaseClientModule";
import { DataConverter } from "./dataConverter";
import { CollectionReference, DocumentReference, Query } from "./union-types";
export declare function applyConverter<T>(documentRef: FirebaseClientModule.firestore.DocumentReference<any>, converter: DataConverter<T>): FirebaseClientModule.firestore.DocumentReference<T>;
export declare function applyConverter<T>(documentRef: FirebaseAdminModule.firestore.DocumentReference<any>, converter: DataConverter<T>): FirebaseAdminModule.firestore.DocumentReference<T>;
export declare function applyConverter<T>(documentRef: DocumentReference<any>, converter: DataConverter<T>): typeof documentRef extends FirebaseClientModule.firestore.DocumentReference ? FirebaseClientModule.firestore.DocumentReference : FirebaseAdminModule.firestore.DocumentReference<T>;
export declare function applyConverter<T>(collectionRef: FirebaseClientModule.firestore.CollectionReference<any>, converter: DataConverter<T>): FirebaseClientModule.firestore.CollectionReference<T>;
export declare function applyConverter<T>(collectionRef: FirebaseAdminModule.firestore.CollectionReference<any>, converter: DataConverter<T>): FirebaseAdminModule.firestore.CollectionReference<T>;
export declare function applyConverter<T>(collectionRef: CollectionReference<any>, converter: DataConverter<T>): typeof collectionRef extends FirebaseClientModule.firestore.CollectionReference ? FirebaseClientModule.firestore.CollectionReference<T> : FirebaseAdminModule.firestore.CollectionReference<T>;
export declare function applyConverter<T>(query: FirebaseClientModule.firestore.Query<any>, converter: DataConverter<T>): FirebaseClientModule.firestore.Query<T>;
export declare function applyConverter<T>(query: FirebaseAdminModule.firestore.Query<any>, converter: DataConverter<T>): FirebaseAdminModule.firestore.Query<T>;
export declare function applyConverter<T>(query: Query, converter: DataConverter<T>): typeof query extends FirebaseClientModule.firestore.Query<T> ? FirebaseClientModule.firestore.Query<T> : FirebaseAdminModule.firestore.Query<T>;