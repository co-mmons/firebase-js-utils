import {SnapshotOptions} from "./types";

export function extractSnapshotOptions(options: any): SnapshotOptions {

    if (options && options.serverTimestamps) {
        return {serverTimestamps: options.serverTimestamps};
    }

    return {};
}
