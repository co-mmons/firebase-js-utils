import {UniversalAuth} from "./auth";
import {UniversalFirestore} from "./firestore";

export abstract class UniversalFirebase {

    abstract auth(): UniversalAuth;

    abstract firestore(): UniversalFirestore;
}
