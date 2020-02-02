import { modules } from "./config";
let _mode;
export function setFirebaseMode(mode, config) {
    _mode = mode;
    if (config === null || config === void 0 ? void 0 : config.modules) {
        for (const mod of Object.keys(config.modules)) {
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