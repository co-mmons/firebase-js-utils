import {firestoreClientModuleTypes} from "../types";

export function extractSnapshotOptions(options?: Partial<firestoreClientModuleTypes.SnapshotOptions>): firestoreClientModuleTypes.SnapshotOptions {

    if (!options) {
        return options;
    }

    return Object.assign({}, "serverTimestamps" in options ? {"serverTimestamps": options.serverTimestamps} : null);
}
