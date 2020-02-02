import {modules} from "./config";

let _mode: "admin" | "client";

export function setFirebaseMode(mode: "admin" | "client", config?: {modules?: Partial<typeof modules>}) {
    _mode = mode;

    if (config?.modules) {
        for (const mod of Object.keys(config.modules)) {
            modules[mod] = config.modules[mod];
        }
    }
}

export function isFirebaseAdmin() {
    return _mode === "admin";
}

export function isFirebaseClient() {
    return _mode === "client";
}
