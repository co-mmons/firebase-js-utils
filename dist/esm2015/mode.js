let _mode;
export function setFirebaseMode(mode) {
    _mode = mode;
}
export function isFirebaseAdmin() {
    return _mode === "admin";
}
export function isFirebaseClient() {
    return _mode === "client";
}
//# sourceMappingURL=mode.js.map