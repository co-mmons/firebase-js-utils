import {UniversalFirestore} from "./firestore";
import {CollectionReference, Query} from "./types";

export class CollectionOrQueryWrapper implements CollectionReference {

    constructor(public readonly fakeFirestore: UniversalFirestore, protected readonly ref: CollectionReference, protected readonly query?: Query) {
    }

    get firestore() {
        return this.ref.firestore;
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

    where(fieldPath: any, opStr: any, value: any) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, this.query.where(fieldPath, opStr, value));
    }

    orderBy(fieldPath: any, directionStr?: any) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, this.query.orderBy(fieldPath, directionStr));
    }

    get(options?: any) {

        if (this.query) {
            return this.query.get(options);
        }

        return this.ref.get(options);
    }

    limit(limit: number): Query {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, this.query.limit(limit));
    }

    startAt(snapshot?: any, ...rest: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, this.query.startAt(snapshot, rest));
    }

    startAfter(snapshot?: any, ...rest: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, this.query.startAfter(snapshot, rest));
    }

    endBefore(snapshot?: any, ...rest: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, this.query.endBefore(snapshot, rest));
    }

    endAt(snapshot?: any, ...rest: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, this.query.endAt(snapshot, rest));
    }

    isEqual(other: any): boolean {
        return this.query.isEqual(other);
    }

    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any) {

        if (this.query) {
            return this.query.onSnapshot(options, onNext, onError, onCompletion);
        }

        return this.ref.onSnapshot(options, onNext, onError, onCompletion);
    }}