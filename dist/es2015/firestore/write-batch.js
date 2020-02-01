"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client = require("@firebase/firestore-types");
const admin = require("@google-cloud/firestore");
class WriteBatch {
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
        return this.batch instanceof client.WriteBatch && this.batch;
    }
    get adminBatch() {
        return this.batch instanceof admin.WriteBatch && this.batch;
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
        if (documentRef instanceof client.DocumentReference) {
            this.clientBatch.set(documentRef, data, options);
        }
        else if (documentRef instanceof admin.DocumentReference) {
            this.adminBatch.set(documentRef, data, options);
        }
        return this;
    }
    update(documentRef, dataOrField, value, ...moreFieldsAndValues) {
        this.count$++;
        if (arguments.length === 2) {
            if (documentRef instanceof client.DocumentReference) {
                this.clientBatch.update(documentRef, dataOrField);
            }
            else if (documentRef instanceof admin.DocumentReference) {
                this.adminBatch.update(documentRef, dataOrField);
            }
        }
        else {
            if (documentRef instanceof client.DocumentReference) {
                this.clientBatch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
            }
            else if (documentRef instanceof admin.DocumentReference) {
                this.adminBatch.update(documentRef, dataOrField, value, ...moreFieldsAndValues);
            }
        }
        return this;
    }
}
exports.WriteBatch = WriteBatch;
class WriteBatchClient extends WriteBatch {
    constructor(firestore) {
        super(firestore);
    }
}
exports.WriteBatchClient = WriteBatchClient;
class WriteBatchAdmin extends WriteBatch {
    constructor(firestore) {
        super(firestore);
    }
}
exports.WriteBatchAdmin = WriteBatchAdmin;
function writeBatch(firestore) {
    if (firestore instanceof client.FirebaseFirestore) {
        return new WriteBatchClient(firestore);
    }
    else if (firestore instanceof admin.Firestore) {
        return new WriteBatchAdmin(firestore);
    }
}
exports.writeBatch = writeBatch;
//# sourceMappingURL=write-batch.js.map