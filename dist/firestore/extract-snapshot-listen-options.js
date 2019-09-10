"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractSnapshotListenOptions(options) {
    if (options && options.includeMetadataChanges) {
        return { includeMetadataChanges: options.includeMetadataChanges };
    }
    return {};
}
exports.extractSnapshotListenOptions = extractSnapshotListenOptions;
//# sourceMappingURL=extract-snapshot-listen-options.js.map