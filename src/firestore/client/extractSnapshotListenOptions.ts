import {FirebaseClientModule} from "../../FirebaseClientModule";

export function extractSnapshotListenOptions(options?: Partial<FirebaseClientModule.firestore.SnapshotListenOptions>): FirebaseClientModule.firestore.SnapshotListenOptions {

    if (!options) {
        return options;
    }

    return Object.assign({}, "includeMetadataChanges" in options ? {"includeMetadataChanges": options.includeMetadataChanges} : null);
}
