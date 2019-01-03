import { UniversalFirestore } from "./firestore";
import { CollectionReference, Query, DocumentSnapshot } from "./types";
export declare class CollectionOrQueryWrapper implements CollectionReference {
    readonly fakeFirestore: UniversalFirestore;
    protected readonly ref: CollectionReference;
    protected readonly query?: Query;
    constructor(fakeFirestore: UniversalFirestore, ref: CollectionReference, query?: Query);
    readonly firestore: import("./types").FirebaseFirestore;
    readonly id: string;
    readonly parent: import("./types").DocumentReference;
    readonly path: string;
    doc(documentPath?: string): import("./types").DocumentReference;
    add(data: any): Promise<import("./types").DocumentReference>;
    where(fieldPath: any, opStr: any, value: any): CollectionOrQueryWrapper;
    orderBy(fieldPath: any, directionStr?: any): CollectionOrQueryWrapper;
    get(options?: any): Promise<import("./types").QuerySnapshot>;
    limit(limit: number): Query;
    startAt(...args: any[]): CollectionOrQueryWrapper;
    startAfter(snapshot?: DocumentSnapshot): Query;
    endBefore(...args: any[]): CollectionOrQueryWrapper;
    endAt(...args: any[]): CollectionOrQueryWrapper;
    isEqual(other: any): boolean;
    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any): () => void;
}
