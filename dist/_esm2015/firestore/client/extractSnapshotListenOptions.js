export function extractSnapshotListenOptions(options) {
    if (!options) {
        return options;
    }
    return Object.assign({}, "includeMetadataChanges" in options ? { "includeMetadataChanges": options.includeMetadataChanges } : null);
}
//# sourceMappingURL=extractSnapshotListenOptions.js.map