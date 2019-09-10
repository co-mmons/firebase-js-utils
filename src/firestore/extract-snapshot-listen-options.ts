import {SnapshotListenOptions} from "./types";

export function extractSnapshotListenOptions(options: any): SnapshotListenOptions {

    if (options && options.includeMetadataChanges) {
        return {includeMetadataChanges: options.includeMetadataChanges};
    }

    return {};
}
