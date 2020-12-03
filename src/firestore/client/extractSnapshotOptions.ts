import {FirebaseClientModule} from "../../FirebaseClientModule";

export function extractSnapshotOptions(options?: Partial<FirebaseClientModule.firestore.SnapshotOptions>): FirebaseClientModule.firestore.SnapshotOptions {

    if (!options) {
        return options;
    }

    return Object.assign({}, "serverTimestamps" in options ? {"serverTimestamps": options.serverTimestamps} : null);
}
