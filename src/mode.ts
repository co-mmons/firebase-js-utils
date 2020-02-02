import {packages} from "./config";

let _mode: "admin" | "client";

export function setFirebaseMode(mode: "admin" | "client", config?: {packages?: Partial<typeof packages>}) {
    _mode = mode;

    if (config?.packages) {
        for (const pckg of Object.keys(config.packages)) {
            packages[pckg] = config.packages[pckg];
        }
    }
}

export function isFirebaseAdmin() {
    return _mode === "admin";
}

export function isFirebaseClient() {
    return _mode === "client";
}
