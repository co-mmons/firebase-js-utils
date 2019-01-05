import {UniversalFirestore} from "./firestore";
import {CollectionReference, Query, DocumentSnapshot} from "./types";

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

    startAt(...args: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).startAt(...args));
    }

    startAfter(snapshot?: DocumentSnapshot): Query;

    startAfter(...args: any[]): Query {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).startAfter(...args));
    }

    endBefore(...args: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).endBefore(...args));
    }

    endAt(...args: any[]) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, (this.query || this.ref).endAt(...args));
    }

    isEqual(other: any): boolean {
        return (this.query || this.ref).isEqual(other);
    }

    onSnapshot(...args: any[]) {
        // @ts-ignore
        return (this.query || this.ref).onSnapshot(...args);
    }}