import type { firestore as firestoreClientModuleTypes } from "firebase/app";
import type * as firestoreAdminModuleTypes from "@google-cloud/firestore";
export type { firestoreClientModuleTypes, firestoreAdminModuleTypes };
declare module "firebase/app" {
    namespace firestore {
        interface Firestore {
            collection<T = firestoreClientModuleTypes.DocumentData>(collectionPath: string): firestoreClientModuleTypes.CollectionReference<T>;
            doc<T = firestoreClientModuleTypes.DocumentData>(documentPath: string): firestoreClientModuleTypes.DocumentReference<T>;
        }
    }
}
declare module "@google-cloud/firestore" {
    namespace FirebaseFirestore {
        interface Firestore {
            collection<T = DocumentData>(collectionPath: string): CollectionReference<T>;
            doc<T = DocumentData>(documentPath: string): DocumentReference<T>;
        }
    }
}
