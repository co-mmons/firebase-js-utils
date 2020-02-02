import type {firestore as firestoreClientTypes} from "firebase/app";
import type * as firestoreAdminTypes from "@google-cloud/firestore";

export type {firestoreClientTypes, firestoreAdminTypes};

declare module "firebase/app" {
    namespace firestore {
        interface Firestore {
            collection<T = firestoreClientTypes.DocumentData>(collectionPath: string): firestoreClientTypes.CollectionReference<T>;
            doc<T = firestoreClientTypes.DocumentData>(documentPath: string): firestoreClientTypes.DocumentReference<T>;
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
