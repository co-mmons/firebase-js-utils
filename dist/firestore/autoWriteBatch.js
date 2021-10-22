"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoWriteBatch = exports.AutoWriteBatchAdmin = exports.AutoWriteBatchClient = exports.AutoWriteBatch = void 0;
const tslib_1 = require("tslib");
const union_types_1 = require("./union-types");
class AutoWriteBatch {
    constructor(firestore) {
        this.firestore = firestore;
        this.limit$ = 249;
        this.count$ = 0;
        this.committedCount$ = 0;
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
    resetCommittedCount() {
        this.committedCount$ = 0;
    }
    autoCommit() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.count$ > this.limit$) {
                const count = this.count$;
                const results = yield this.batch.commit();
                this.committedCount$ += count;
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.count$ > 0) {
                const count = this.count$;
                const results = yield this.batch.commit();
                this.committedCount$ += count;
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
        if (union_types_1.DocumentReference.isClient(documentRef) && union_types_1.WriteBatch.isClient(this.batch)) {
            this.batch.set(documentRef, data, options);
        }
        else if (union_types_1.DocumentReference.isAdmin(documentRef) && union_types_1.WriteBatch.isAdmin(this.batch)) {
            this.batch.set(documentRef, data, options);
        }
        return this;
    }
    update(documentRef, dataOrField, value, ...moreFieldsAndValues) {
        this.count$++;
        if (arguments.length === 2) {
            if (union_types_1.DocumentReference.isClient(documentRef) && union_types_1.WriteBatch.isClient(this.batch)) {
                this.batch.update(documentRef, dataOrField);
            }
            else if (union_types_1.DocumentReference.isAdmin(documentRef) && union_types_1.WriteBatch.isAdmin(this.batch)) {
                this.batch.update(documentRef, dataOrField);
            }
        }
        else {
            if (union_types_1.DocumentReference.isClient(documentRef) && union_types_1.WriteBatch.isClient(this.batch)) {
                this.batch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
            }
            else if (union_types_1.DocumentReference.isAdmin(documentRef) && union_types_1.WriteBatch.isAdmin(this.batch)) {
                this.batch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
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
    get adminBatch() {
        return this.batch;
    }
    create(documentRef, data) {
        this.count$++;
        this.adminBatch.create(documentRef, data);
        return this;
    }
}
exports.AutoWriteBatchAdmin = AutoWriteBatchAdmin;
function autoWriteBatch(firestore) {
    if (union_types_1.Firestore.isClient(firestore)) {
        return new AutoWriteBatchClient(firestore);
    }
    else if (union_types_1.Firestore.isAdmin(firestore)) {
        return new AutoWriteBatchAdmin(firestore);
    }
}
exports.autoWriteBatch = autoWriteBatch;
//# sourceMappingURL=autoWriteBatch.js.map