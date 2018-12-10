import { Query } from "../types";
import { FirestoreHelper } from "../helper";
export declare class QueryWrapper implements Query {
    readonly firestore: FirestoreHelper;
    private readonly query;
    constructor(firestore: FirestoreHelper, query: Query);
    where(fieldPath: any, opStr: any, value: any): QueryWrapper;
    orderBy(fieldPath: any, directionStr?: any): QueryWrapper;
    get(options?: any): Promise<import("../../../../../../../Volumes/Dane/Projekty/co.mmons.firebase-js-utils/src/firestore/types").QuerySnapshot>;
    limit(limit: number): Query;
    startAt(snapshot?: any, ...rest: any[]): QueryWrapper;
    startAfter(snapshot?: any, ...rest: any[]): QueryWrapper;
    endBefore(snapshot?: any, ...rest: any[]): QueryWrapper;
    endAt(snapshot?: any, ...rest: any[]): QueryWrapper;
    isEqual(other: any): boolean;
    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any): () => void;
}
