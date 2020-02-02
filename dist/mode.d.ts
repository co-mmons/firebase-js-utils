import { modules } from "./config";
export declare function setFirebaseMode(mode: "admin" | "client", config?: {
    modules?: Partial<typeof modules>;
}): void;
export declare function isFirebaseAdmin(): boolean;
export declare function isFirebaseClient(): boolean;
