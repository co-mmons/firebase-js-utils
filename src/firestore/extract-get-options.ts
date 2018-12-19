import {GetOptions} from "./types";

export function extractGetOptions(options: any): GetOptions {

    if (!options) {
        return options;
    }

    if (options.source) {
        return {source: options.source};
    }

    return undefined;
}
