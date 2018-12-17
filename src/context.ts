import {UniversalAuth} from "./auth";
import {UniversalFirestore} from "./firestore";

export abstract class UniversalFirebaseContext {

    readonly auth: UniversalAuth;

    readonly firestore: UniversalFirestore;

    abstract functionUrl(name: string): string;
}
