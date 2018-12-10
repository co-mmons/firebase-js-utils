import {Query} from "../types";
import {FirestoreHelper} from "../helper";

export class QueryWrapper implements Query {
    
    constructor(public readonly firestore: FirestoreHelper, private readonly query: Query) {
    }

    where(fieldPath: any, opStr: any, value: any) {
        return new QueryWrapper(this.firestore, this.query.where(fieldPath, opStr, value));
    }

    orderBy(fieldPath: any, directionStr?: any) {
        return new QueryWrapper(this.firestore, this.query.orderBy(fieldPath, directionStr)); 
    }

    get(options?: any) {
        return this.query.get(options);
    }
    
    limit(limit: number): Query {
        return new QueryWrapper(this.firestore, this.query.limit(limit));
    }

    startAt(snapshot?: any, ...rest: any[]) {
        return new QueryWrapper(this.firestore, this.query.startAt(snapshot, rest));
    }

    startAfter(snapshot?: any, ...rest: any[]) {
        return new QueryWrapper(this.firestore, this.query.startAfter(snapshot, rest));
    }

    endBefore(snapshot?: any, ...rest: any[]) {
        return new QueryWrapper(this.firestore, this.query.endBefore(snapshot, rest));
    }

    endAt(snapshot?: any, ...rest: any[]) {
        return new QueryWrapper(this.firestore, this.query.endAt(snapshot, rest));
    }

    isEqual(other: any): boolean {
        return this.query.isEqual(other);
    }

    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any) {
        return this.query.onSnapshot(options, onNext, onError, onCompletion);
    }

}