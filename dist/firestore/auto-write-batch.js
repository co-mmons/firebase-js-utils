"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("./types");
const union_types_1 = require("./union-types");
class AutoWriteBatch {
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
        return this.batch instanceof types_1.firestoreClient.WriteBatch && this.batch;
    }
    get adminBatch() {
        return this.batch instanceof types_1.firestoreAdmin.WriteBatch && this.batch;
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        if (union_types_1.DocumentReference.isClient(documentRef)) {
            this.clientBatch.set(documentRef, data, options);
        }
        else if (union_types_1.DocumentReference.isAdmin(documentRef)) {
            this.adminBatch.set(documentRef, data, options);
        }
        return this;
    }
    update(documentRef, dataOrField, value, ...moreFieldsAndValues) {
        this.count$++;
        if (arguments.length === 2) {
            if (union_types_1.DocumentReference.isClient(documentRef)) {
                this.clientBatch.update(documentRef, dataOrField);
            }
            else if (union_types_1.DocumentReference.isAdmin(documentRef)) {
                this.adminBatch.update(documentRef, dataOrField);
            }
        }
        else {
            if (union_types_1.DocumentReference.isClient(documentRef)) {
                this.clientBatch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
            }
            else if (union_types_1.DocumentReference.isAdmin(documentRef)) {
                this.adminBatch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
            }
        }
        return this;
    }
}
exports.AutoWriteBatch = AutoWriteBatch;
class AutoWriteBatchClient extends AutoWriteBatch {
    constructor(firestore) {
        super(firestore);
    }
}
exports.AutoWriteBatchClient = AutoWriteBatchClient;
class AutoWriteBatchAdmin extends AutoWriteBatch {
    constructor(firestore) {
        super(firestore);
    }
}
exports.AutoWriteBatchAdmin = AutoWriteBatchAdmin;
function autoWriteBatch(firestore) {
    if (firestore instanceof types_1.firestoreClient.FirebaseFirestore) {
        return new AutoWriteBatchClient(firestore);
    }
    else if (firestore instanceof types_1.firestoreAdmin.Firestore) {
        return new AutoWriteBatchAdmin(firestore);
    }
}
exports.autoWriteBatch = autoWriteBatch;
//# sourceMappingURL=auto-write-batch.js.map