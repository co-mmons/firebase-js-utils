"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractSnapshotListenOptions(options) {
    if (!options) {
        return options;
    }
    if (options.includeMetadataChanges) {
        return { includeMetadataChanges: options.includeMetadataChanges };
    }
    return undefined;
}
exports.extractSnapshotListenOptions = extractSnapshotListenOptions;
//# sourceMappingURL=extract-snapshot-listen-options.js.map