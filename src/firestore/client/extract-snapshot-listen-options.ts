import {firestoreClientModuleTypes} from "../types";

export function extractSnapshotListenOptions(options?: Partial<firestoreClientModuleTypes.SnapshotListenOptions>): firestoreClientModuleTypes.SnapshotListenOptions {

    if (!options) {
        return options;
    }

    return Object.assign({}, "includeMetadataChanges" in options ? {"includeMetadataChanges": options.includeMetadataChanges} : null);
}
