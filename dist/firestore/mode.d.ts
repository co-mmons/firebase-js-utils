import { firestoreClientModuleTypes, firestoreAdminModuleTypes } from "./types";
export declare function isFirestoreClient(): boolean;
export declare function firestoreClientModule(): typeof firestoreClientModuleTypes;
export declare function isFirestoreAdmin(): boolean;
export declare function firestoreAdminModule(): typeof firestoreAdminModuleTypes;
export declare function firestoreModule(): typeof firestoreAdminModuleTypes | typeof firestoreClientModuleTypes;
