let _mode: "admin" | "client";

export function setFirebaseMode(mode: "admin" | "client") {
    _mode = mode;
}

export function isFirebaseAdminMode() {
    return _mode === "admin";
}

export function isFirebaseClientMode() {
    return _mode === "client";
}
