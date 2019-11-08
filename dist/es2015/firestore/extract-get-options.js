"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractGetOptions(options) {
    if (!options) {
        return options;
    }
    if (options.source) {
        return { source: options.source };
    }
    return undefined;
}
exports.extractGetOptions = extractGetOptions;
//# sourceMappingURL=extract-get-options.js.map