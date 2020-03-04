"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractGetOptions(options) {
    if (!options) {
        return options;
    }
    return Object.assign({}, "source" in options ? { "source": options.source } : null);
}
exports.extractGetOptions = extractGetOptions;
//# sourceMappingURL=extract-get-options.js.map