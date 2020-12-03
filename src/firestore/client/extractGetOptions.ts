import {FirebaseClientModule} from "../../FirebaseClientModule";

export function extractGetOptions(options?: Partial<FirebaseClientModule.firestore.GetOptions>): FirebaseClientModule.firestore.GetOptions {

    if (!options) {
        return options;
    }

    return Object.assign({}, "source" in options ? {"source": options.source} : null);
}
