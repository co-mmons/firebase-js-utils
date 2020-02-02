import { packages } from "./config";
export declare function setFirebaseMode(mode: "admin" | "client", config?: {
    packages?: Partial<typeof packages>;
}): void;
export declare function isFirebaseAdmin(): boolean;
export declare function isFirebaseClient(): boolean;
