import {firestoreClientModuleTypes} from "../types";

export function extractGetOptions(options?: Partial<firestoreClientModuleTypes.GetOptions>): firestoreClientModuleTypes.GetOptions {

    if (!options) {
        return options;
    }

    return Object.assign({}, "source" in options ? {"source": options.source} : null);
}
