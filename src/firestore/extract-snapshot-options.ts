import {SnapshotOptions} from "./types";

export function extractSnapshotOptions(options: any): SnapshotOptions {

    if (!options) {
        return options;
    }

    if (options.serverTimestamps) {
        return {serverTimestamps: options.serverTimestamps};
    }

    return undefined;
}
