export function extractGetOptions(options) {
    if (!options) {
        return options;
    }
    return Object.assign({}, "source" in options ? { "source": options.source } : null);
}
//# sourceMappingURL=extract-get-options.js.map