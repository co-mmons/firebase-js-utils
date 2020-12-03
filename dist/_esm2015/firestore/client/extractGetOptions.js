export function extractGetOptions(options) {
    if (!options) {
        return options;
    }
    return Object.assign({}, "source" in options ? { "source": options.source } : null);
}
//# sourceMappingURL=extractGetOptions.js.map