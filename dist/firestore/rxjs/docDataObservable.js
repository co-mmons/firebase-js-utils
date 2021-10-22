"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docDataObservable = void 0;
const operators_1 = require("rxjs/operators");
const union_types_1 = require("../union-types");
const docSnapshotObservable_1 = require("./docSnapshotObservable");
function docDataObservable(doc, options) {
    if (union_types_1.DocumentReference.isClient(doc)) {
        return (0, docSnapshotObservable_1.docSnapshotObservable)(doc, options).pipe((0, operators_1.map)(snapshot => snapshot.data()));
    }
    else if (union_types_1.DocumentReference.isAdmin(doc)) {
        return (0, docSnapshotObservable_1.docSnapshotObservable)(doc).pipe((0, operators_1.map)(snapshot => snapshot.data()));
    }
    else {
        throw new Error("Invalid document reference");
    }
}
exports.docDataObservable = docDataObservable;
//# sourceMappingURL=docDataObservable.js.map