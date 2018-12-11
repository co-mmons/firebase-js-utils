import { AbstractFirestore } from "./firestore";
import { CollectionReference, Query } from "./types";
export declare class CollectionOrQueryWrapper implements CollectionReference {
    readonly fakeFirestore: AbstractFirestore;
    protected readonly ref: CollectionReference;
    protected readonly query?: Query;
    constructor(fakeFirestore: AbstractFirestore, ref: CollectionReference, query?: Query);
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
    startAt(snapshot?: any, ...rest: any[]): CollectionOrQueryWrapper;
    startAfter(snapshot?: any, ...rest: any[]): CollectionOrQueryWrapper;
    endBefore(snapshot?: any, ...rest: any[]): CollectionOrQueryWrapper;
    endAt(snapshot?: any, ...rest: any[]): CollectionOrQueryWrapper;
    isEqual(other: any): boolean;
    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any): () => void;
}
