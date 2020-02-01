var _mode;
export function setFirebaseMode(mode) {
    _mode = mode;
}
export function isFirebaseAdminMode() {
    return _mode === "admin";
}
export function isFirebaseClientMode() {
    return _mode === "client";
}
//# sourceMappingURL=mode.js.map