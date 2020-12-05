import { __awaiter } from "tslib";
import { DocumentReference, Firestore, WriteBatch } from "./union-types";
export class AutoWriteBatch {
    constructor(firestore) {
        this.firestore = firestore;
        this.limit$ = 249;
        this.count$ = 0;
    }
    get batch() {
        if (!this.batch$) {
            this.batch$ = this.firestore.batch();
        }
        return this.batch$;
    }
    get count() {
        return this.count$;
    }
    get limit() {
        return this.limit$;
    }
    set limit(limit) {
        this.limit$ = limit > 0 && limit <= 249 ? limit : 249;
    }
    isFull() {
        return this.count$ >= this.limit$;
    }
    autoCommit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.count$ > this.limit$) {
                const count = this.count$;
                const results = yield this.batch.commit();
                this.batch$ = undefined;
                this.count$ = 0;
                if (this.onCommit) {
                    try {
                        this.onCommit(count, results);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                return { count, results };
            }
            return { count: 0 };
        });
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.count$ > 0) {
                const count = this.count$;
                const results = yield this.batch.commit();
                this.batch$ = undefined;
                this.count$ = 0;
                if (this.onCommit) {
                    try {
                        this.onCommit(count, results);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                return { count, results };
            }
            return { count: 0 };
        });
    }
    delete(documentRef) {
        this.count$++;
        this.batch.delete(documentRef);
        return this;
    }
    set(documentRef, data, options) {
        this.count$++;
        if (DocumentReference.isClient(documentRef) && WriteBatch.isClient(this.batch)) {
            this.batch.set(documentRef, data, options);
        }
        else if (DocumentReference.isAdmin(documentRef) && WriteBatch.isAdmin(this.batch)) {
            this.batch.set(documentRef, data, options);
        }
        return this;
    }
    update(documentRef, dataOrField, value, ...moreFieldsAndValues) {
        this.count$++;
        if (arguments.length === 2) {
            if (DocumentReference.isClient(documentRef) && WriteBatch.isClient(this.batch)) {
                this.batch.update(documentRef, dataOrField);
            }
            else if (DocumentReference.isAdmin(documentRef) && WriteBatch.isAdmin(this.batch)) {
                this.batch.update(documentRef, dataOrField);
            }
        }
        else {
            if (DocumentReference.isClient(documentRef) && WriteBatch.isClient(this.batch)) {
                this.batch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
            }
            else if (DocumentReference.isAdmin(documentRef) && WriteBatch.isAdmin(this.batch)) {
                this.batch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
            }
        }
        return this;
    }
}
export class AutoWriteBatchClient extends AutoWriteBatch {
    constructor(firestore) {
        super(firestore);
    }
}
export class AutoWriteBatchAdmin extends AutoWriteBatch {
    constructor(firestore) {
        super(firestore);
    }
    get adminBatch() {
        return this.batch;
    }
    create(documentRef, data) {
        this.count$++;
        this.adminBatch.create(documentRef, data);
        return this;
    }
}
export function autoWriteBatch(firestore) {
    if (Firestore.isClient(firestore)) {
        return new AutoWriteBatchClient(firestore);
    }
    else if (Firestore.isAdmin(firestore)) {
        return new AutoWriteBatchAdmin(firestore);
    }
}
//# sourceMappingURL=autoWriteBatch.js.map