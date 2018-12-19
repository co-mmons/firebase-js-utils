export function extractSnapshotOptions(options) {
    if (!options) {
        return options;
    }
    if (options.serverTimestamps) {
        return { serverTimestamps: options.serverTimestamps };
    }
    return undefined;
}
//# sourceMappingURL=extract-snapshot-options.js.map