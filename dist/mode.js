"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFirebaseClient = exports.isFirebaseAdmin = exports.setFirebaseMode = void 0;
const config_1 = require("./config");
let _mode;
function setFirebaseMode(mode, config) {
    _mode = mode;
    if (config === null || config === void 0 ? void 0 : config.modules) {
        for (const mod of Object.keys(config.modules)) {
            config_1.modules[mod] = config.modules[mod];
        }
    }
}
exports.setFirebaseMode = setFirebaseMode;
function isFirebaseAdmin() {
    return _mode === "admin";
}
exports.isFirebaseAdmin = isFirebaseAdmin;
function isFirebaseClient() {
    return _mode === "client";
}
exports.isFirebaseClient = isFirebaseClient;
//# sourceMappingURL=mode.js.map