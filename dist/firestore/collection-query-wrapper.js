"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CollectionOrQueryWrapper {
    constructor(fakeFirestore, ref, query) {
        this.fakeFirestore = fakeFirestore;
        this.ref = ref;
        this.query = query;
    }
    mutate(query) {
        return new CollectionOrQueryWrapper(this.fakeFirestore, this.ref, query);
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
    doc(documentPath) {
        return this.ref.doc(documentPath);
    }
    add(data) {
        return this.ref.add(data);
    }
    where(fieldPath, opStr, value) {
        return this.mutate((this.query || this.ref).where(fieldPath, opStr, value));
    }
    orderBy(fieldPath, directionStr) {
        return this.mutate((this.query || this.ref).orderBy(fieldPath, directionStr));
    }
    get(options) {
        return (this.query || this.ref).get(options);
    }
    limit(limit) {
        return this.mutate((this.query || this.ref).limit(limit));
    }
    startAt(...args) {
        return this.mutate((this.query || this.ref).startAt(...args));
    }
    startAfter(...args) {
        return this.mutate((this.query || this.ref).startAfter(...args));
    }
    endBefore(...args) {
        return this.mutate((this.query || this.ref).endBefore(...args));
    }
    endAt(...args) {
        return this.mutate((this.query || this.ref).endAt(...args));
    }
    isEqual(other) {
        return (this.query || this.ref).isEqual(other);
    }
    onSnapshot(...args) {
        // @ts-ignore
        return (this.query || this.ref).onSnapshot(...args);
    }
}
exports.CollectionOrQueryWrapper = CollectionOrQueryWrapper;
//# sourceMappingURL=collection-query-wrapper.js.map