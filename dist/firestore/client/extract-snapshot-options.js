"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractSnapshotOptions(options) {
    if (!options) {
        return options;
    }
    return Object.assign({}, "serverTimestamps" in options ? { "serverTimestamps": options.serverTimestamps } : null);
}
exports.extractSnapshotOptions = extractSnapshotOptions;
//# sourceMappingURL=extract-snapshot-options.js.map