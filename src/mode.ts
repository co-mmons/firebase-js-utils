let _mode: "admin" | "client";

export function setFirebaseMode(mode: "admin" | "client") {
    _mode = mode;
}

export function isFirebaseAdmin() {
    return _mode === "admin";
}

export function isFirebaseClient() {
    return _mode === "client";
}
