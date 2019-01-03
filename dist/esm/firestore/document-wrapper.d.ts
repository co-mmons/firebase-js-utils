import { DocumentReference, CollectionReference, DocumentData, SetOptions, GetOptions, DocumentSnapshot, FirebaseFirestore } from "./types";
import { UniversalFirestore } from "./firestore";
export declare class DocumentWrapper implements DocumentReference {
    readonly fakeFirestore: UniversalFirestore;
    private readonly ref;
    constructor(fakeFirestore: UniversalFirestore, ref: DocumentReference);
    readonly firestore: FirebaseFirestore;
    readonly id: string;
    readonly parent: CollectionReference;
    readonly path: string;
    collection(collectionPath: string): CollectionReference;
    isEqual(other: DocumentReference): boolean;
    set(data: DocumentData, options?: SetOptions): Promise<void>;
    update(data: any): Promise<void>;
    delete(): Promise<void>;
    get(options?: GetOptions): Promise<DocumentSnapshot>;
    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any): () => void;
}
