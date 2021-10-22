"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsSnapshotsObservable = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const extractSnapshotListenOptions_1 = require("../client/extractSnapshotListenOptions");
const union_types_1 = require("../union-types");
function docsSnapshotsObservable(query, options) {
    if (union_types_1.Query.isClient(query)) {
        return new rxjs_1.Observable(subscriber => {
            const unsubscribe = query.onSnapshot((0, extractSnapshotListenOptions_1.extractSnapshotListenOptions)(options) || {}, snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe((0, operators_1.map)(snapshot => snapshot.docs));
    }
    else if (union_types_1.Query.isAdmin(query)) {
        return new rxjs_1.Observable(subscriber => {
            const unsubscribe = query.onSnapshot(snapshot => subscriber.next(snapshot), error => subscriber.error(error));
            return () => unsubscribe();
        }).pipe((0, operators_1.map)(snapshot => snapshot.docs));
    }
    else {
        throw new Error("Invalid query");
    }
}
exports.docsSnapshotsObservable = docsSnapshotsObservable;
//# sourceMappingURL=docsSnapshotsObservable.js.map