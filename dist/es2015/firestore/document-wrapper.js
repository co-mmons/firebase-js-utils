"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentWrapper {
    constructor(fakeFirestore, ref) {
        this.fakeFirestore = fakeFirestore;
        this.ref = ref;
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
    collection(collectionPath) {
        return this.ref.collection(collectionPath);
    }
    isEqual(other) {
        return this.ref.isEqual(other);
    }
    set(data, options) {
        return this.ref.set(data, options);
    }
    update(...data) {
        //@ts-ignore
        return this.ref.update(...data);
    }
    delete() {
        return this.ref.delete();
    }
    get(options) {
        return this.ref.get(options);
    }
    onSnapshot(options, onNext, onError, onCompletion) {
        return this.ref.onSnapshot(options, onNext, onError, onCompletion);
    }
}
exports.DocumentWrapper = DocumentWrapper;
//# sourceMappingURL=document-wrapper.js.map