"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFirebaseClient = exports.isFirebaseAdmin = exports.setFirebaseMode = void 0;
var config_1 = require("./config");
var _mode;
function setFirebaseMode(mode, config) {
    _mode = mode;
    if (config === null || config === void 0 ? void 0 : config.modules) {
        for (var _i = 0, _a = Object.keys(config.modules); _i < _a.length; _i++) {
            var mod = _a[_i];
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