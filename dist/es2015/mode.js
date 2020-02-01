"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _mode;
function setFirebaseMode(mode) {
    _mode = mode;
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