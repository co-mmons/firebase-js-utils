export function extractSnapshotListenOptions(options) {
    if (options && options.includeMetadataChanges) {
        return { includeMetadataChanges: options.includeMetadataChanges };
    }
    return {};
}
//# sourceMappingURL=extract-snapshot-listen-options.js.map