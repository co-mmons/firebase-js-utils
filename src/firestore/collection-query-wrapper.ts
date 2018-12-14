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
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).where(fieldPath, opStr, value));
    }

    orderBy(fieldPath: any, directionStr?: any) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).orderBy(fieldPath, directionStr));
    }

    get(options?: any) {
        return (this.query || this.ref).get(options);
    }

    limit(limit: number): Query {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).limit(limit));
    }

    startAt(snapshot?: any, ...rest: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).startAt(snapshot, rest));
    }

    startAfter(snapshot?: any, ...rest: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).startAfter(snapshot, rest));
    }

    endBefore(snapshot?: any, ...rest: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).endBefore(snapshot, rest));
    }

    endAt(snapshot?: any, ...rest: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).endAt(snapshot, rest));
    }

    isEqual(other: any): boolean {
        return (this.query || this.ref).isEqual(other);
    }

    onSnapshot(options: any, onNext?: any, onError?: any, onCompletion?: any) {
        return (this.query || this.ref).onSnapshot(options, onNext, onError, onCompletion);
    }}