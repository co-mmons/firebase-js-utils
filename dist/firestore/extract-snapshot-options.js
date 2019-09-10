"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractSnapshotOptions(options) {
    if (options && options.serverTimestamps) {
        return { serverTimestamps: options.serverTimestamps };
    }
    return {};
}
exports.extractSnapshotOptions = extractSnapshotOptions;
//# sourceMappingURL=extract-snapshot-options.js.map