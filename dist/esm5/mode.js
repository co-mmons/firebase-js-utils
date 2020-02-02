import { packages } from "./config";
var _mode;
export function setFirebaseMode(mode, config) {
    _mode = mode;
    if (config === null || config === void 0 ? void 0 : config.packages) {
        for (var _i = 0, _a = Object.keys(config.packages); _i < _a.length; _i++) {
            var pckg = _a[_i];
            packages[pckg] = config.packages[pckg];
        }
    }
}
export function isFirebaseAdmin() {
    return _mode === "admin";
}
export function isFirebaseClient() {
    return _mode === "client";
}
//# sourceMappingURL=mode.js.map