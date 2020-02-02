import * as firestoreClient from "@firebase/firestore-types";
import * as firestoreAdmin from "@google-cloud/firestore";
export {firestoreClient, firestoreAdmin};

declare module "@firebase/firestore-types" {
    export interface FirebaseFirestore {
        collection<T = DocumentData>(collectionPath: string): CollectionReference<T>;
        doc<T = DocumentData>(documentPath: string): DocumentReference<T>;
    }
}

declare module "@google-cloud/firestore" {
    export namespace FirebaseFirestore {
        export interface Firestore {
            collection<T = DocumentData>(collectionPath: string): CollectionReference<T>;
            doc<T = DocumentData>(documentPath: string): DocumentReference<T>;
        }
    }
}
