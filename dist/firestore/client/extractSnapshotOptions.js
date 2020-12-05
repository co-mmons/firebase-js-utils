"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractSnapshotOptions = void 0;
function extractSnapshotOptions(options) {
    if (!options) {
        return options;
    }
    return Object.assign({}, "serverTimestamps" in options ? { "serverTimestamps": options.serverTimestamps } : null);
}
exports.extractSnapshotOptions = extractSnapshotOptions;
//# sourceMappingURL=extractSnapshotOptions.js.map