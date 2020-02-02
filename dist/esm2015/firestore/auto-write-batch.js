import { __awaiter } from "tslib";
import { firestoreAdmin, firestoreClient } from "./types";
import { DocumentReference } from "./union-types";
export class AutoWriteBatch {
    constructor(firestore) {
        this.firestore = firestore;
        this.limit$ = 499;
        this.count$ = 0;
    }
    get batch() {
        if (!this.batch$) {
            this.batch$ = this.firestore.batch();
        }
        return this.batch$;
    }
    get clientBatch() {
        return this.batch instanceof firestoreClient.WriteBatch && this.batch;
    }
    get adminBatch() {
        return this.batch instanceof firestoreAdmin.WriteBatch && this.batch;
    }
    get count() {
        return this.count$;
    }
    get limit() {
        return this.limit$;
    }
    set limit(limit) {
        this.limit$ = limit > 0 && limit <= 499 ? limit : 499;
    }
    isFull() {
        return this.count$ >= this.limit$;
    }
    autoCommit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.count$ > this.limit$) {
                const count = this.count$;
                const results = yield this.batch.commit();
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
        if (DocumentReference.isClient(documentRef)) {
            this.clientBatch.set(documentRef, data, options);
        }
        else if (DocumentReference.isAdmin(documentRef)) {
            this.adminBatch.set(documentRef, data, options);
        }
        return this;
    }
    update(documentRef, dataOrField, value, ...moreFieldsAndValues) {
        this.count$++;
        if (arguments.length === 2) {
            if (DocumentReference.isClient(documentRef)) {
                this.clientBatch.update(documentRef, dataOrField);
            }
            else if (DocumentReference.isAdmin(documentRef)) {
                this.adminBatch.update(documentRef, dataOrField);
            }
        }
        else {
            if (DocumentReference.isClient(documentRef)) {
                this.clientBatch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
            }
            else if (DocumentReference.isAdmin(documentRef)) {
                this.adminBatch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
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
}
export function autoWriteBatch(firestore) {
    if (firestore instanceof firestoreClient.FirebaseFirestore) {
        return new AutoWriteBatchClient(firestore);
    }
    else if (firestore instanceof firestoreAdmin.Firestore) {
        return new AutoWriteBatchAdmin(firestore);
    }
}
//# sourceMappingURL=auto-write-batch.js.map