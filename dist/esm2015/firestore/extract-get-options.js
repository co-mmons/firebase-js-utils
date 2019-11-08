export function extractGetOptions(options) {
    if (!options) {
        return options;
    }
    if (options.source) {
        return { source: options.source };
    }
    return undefined;
}
//# sourceMappingURL=extract-get-options.js.map