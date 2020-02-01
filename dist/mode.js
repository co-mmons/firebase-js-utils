"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _mode;
function setFirebaseMode(mode) {
    _mode = mode;
}
exports.setFirebaseMode = setFirebaseMode;
function isFirebaseAdminMode() {
    return _mode === "admin";
}
exports.isFirebaseAdminMode = isFirebaseAdminMode;
function isFirebaseClientMode() {
    return _mode === "client";
}
exports.isFirebaseClientMode = isFirebaseClientMode;
//# sourceMappingURL=mode.js.map