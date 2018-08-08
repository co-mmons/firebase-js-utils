import "./declarations";

import {loadCollection} from "./collection";
import {loadDoc} from "./doc";
import {loadQuery} from "./query";

export function extendFirestore() {
    loadCollection();
    loadQuery();
    loadDoc();
}