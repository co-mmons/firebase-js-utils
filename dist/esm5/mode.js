import { modules } from "./config";
var _mode;
export function setFirebaseMode(mode, config) {
    _mode = mode;
    if (config === null || config === void 0 ? void 0 : config.modules) {
        for (var _i = 0, _a = Object.keys(config.modules); _i < _a.length; _i++) {
            var mod = _a[_i];
            modules[mod] = config.modules[mod];
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