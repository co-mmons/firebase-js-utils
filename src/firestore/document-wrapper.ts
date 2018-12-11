import {DocumentReference, CollectionReference, DocumentData, SetOptions, GetOptions, DocumentSnapshot, FirebaseFirestore} from "./types";
import {AbstractFirestore} from "./firestore";

export class DocumentWrapper implements DocumentReference {

    constructor(public readonly fakeFirestore: AbstractFirestore, private readonly ref: DocumentReference) {
    }

    get firestore(): FirebaseFirestore {
        return this.ref.firestore;
    }

    get id(): string {
        return this.ref.id;
    }

    get parent(): CollectionReference {
        return this.ref.parent;
    }

    get path(): string {
        return this.ref.path;
    }

    collection(collectionPath: string): CollectionReference {
        return this.ref.collection(collectionPath);
    }

    isEqual(other: DocumentReference): boolean {
        return this.ref.isEqual(other);
    }
    
    set(data: DocumentData, options?: SetOptions): Promise<void> {
        return this.ref.set(data, options);
    }

    update(data: any, ...rest: any[]) {
        return this.ref.update(data, rest);
    }

    delete(): Promise<void> {
        return this.ref.delete();
    }
    
    get(options?: GetOptions): Promise<DocumentSnapshot> {
        return this.ref.get(options);
    }

    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any) {
        return this.ref.onSnapshot(options, onNext, onError, onCompletion);
    }
}