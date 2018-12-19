export function extractSnapshotListenOptions(options) {
    if (!options) {
        return options;
    }
    if (options.includeMetadataChanges) {
        return { includeMetadataChanges: options.includeMetadataChanges };
    }
    return undefined;
}
//# sourceMappingURL=extract-snapshot-listen-options.js.map