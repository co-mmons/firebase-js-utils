"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractGetOptions = void 0;
function extractGetOptions(options) {
    if (!options) {
        return options;
    }
    return Object.assign({}, "source" in options ? { "source": options.source } : null);
}
exports.extractGetOptions = extractGetOptions;
//# sourceMappingURL=extractGetOptions.js.map