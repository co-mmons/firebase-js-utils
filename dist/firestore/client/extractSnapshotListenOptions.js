"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractSnapshotListenOptions = void 0;
function extractSnapshotListenOptions(options) {
    if (!options) {
        return options;
    }
    return Object.assign({}, "includeMetadataChanges" in options ? { "includeMetadataChanges": options.includeMetadataChanges } : null);
}
exports.extractSnapshotListenOptions = extractSnapshotListenOptions;
//# sourceMappingURL=extractSnapshotListenOptions.js.map