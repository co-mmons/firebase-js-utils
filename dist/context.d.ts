import { UniversalAuth } from "./auth";
import { UniversalFirestore } from "./firestore";
export declare abstract class UniversalFirebaseContext {
    readonly auth: UniversalAuth;
    readonly firestore: UniversalFirestore;
}
