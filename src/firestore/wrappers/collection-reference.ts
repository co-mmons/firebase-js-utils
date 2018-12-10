import {FirestoreHelper} from "../helper";
import {CollectionReference} from "../types";
import {QueryWrapper} from "./query";

export class CollectionReferenceWrapper extends QueryWrapper implements CollectionReference {

    constructor(public readonly firestore: FirestoreHelper, private readonly ref: CollectionReference) {
        super(firestore, ref);
    }

    get id() {
        return this.ref.id;
    }

    get parent() {
        return this.ref.parent;
    }

    get path() {
        return this.ref.path;
    }
    
    doc(documentPath?: string) {
        return this.ref.doc(documentPath);
    }

    add(data: any) {
        return this.ref.add(data);
    }
}