"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractSnapshotOptions(options) {
    if (!options) {
        return options;
    }
    if (options.serverTimestamps) {
        return { serverTimestamps: options.serverTimestamps };
    }
    return undefined;
}
exports.extractSnapshotOptions = extractSnapshotOptions;
//# sourceMappingURL=extract-snapshot-options.js.map