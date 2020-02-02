import { packages } from "./config";
let _mode;
export function setFirebaseMode(mode, config) {
    _mode = mode;
    if (config === null || config === void 0 ? void 0 : config.packages) {
        for (const pckg of Object.keys(config.packages)) {
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