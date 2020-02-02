"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
let _mode;
function setFirebaseMode(mode, config) {
    _mode = mode;
    if (config === null || config === void 0 ? void 0 : config.packages) {
        for (const pckg of Object.keys(config.packages)) {
            config_1.packages[pckg] = config.packages[pckg];
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