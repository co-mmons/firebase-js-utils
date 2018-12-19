import {SnapshotListenOptions} from "./types";

export function extractSnapshotListenOptions(options: any): SnapshotListenOptions {

    if (!options) {
        return options;
    }

    if (options.includeMetadataChanges) {
        return {includeMetadataChanges: options.includeMetadataChanges};
    }

    return undefined;
}
