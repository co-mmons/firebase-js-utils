import { FirebaseClientModule } from "../index";
declare module "firebase/app" {
    namespace firestore {
        interface Firestore {
            collection<T = FirebaseClientModule.firestore.DocumentData>(collectionPath: string): FirebaseClientModule.firestore.CollectionReference<T>;
            doc<T = FirebaseClientModule.firestore.DocumentData>(documentPath: string): FirebaseClientModule.firestore.DocumentReference<T>;
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
