export function extractSnapshotOptions(options) {
    if (options && options.serverTimestamps) {
        return { serverTimestamps: options.serverTimestamps };
    }
    return {};
}
//# sourceMappingURL=extract-snapshot-options.js.map