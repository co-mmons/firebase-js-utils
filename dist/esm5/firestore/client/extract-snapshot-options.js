export function extractSnapshotOptions(options) {
    if (!options) {
        return options;
    }
    return Object.assign({}, "serverTimestamps" in options ? { "serverTimestamps": options.serverTimestamps } : null);
}
//# sourceMappingURL=extract-snapshot-options.js.map