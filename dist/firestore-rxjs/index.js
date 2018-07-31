import "../firestore";
import { extendFirestore as _extendFirestore } from "../firestore";
import "./declarations";
export * from "./doc-observable";
import { docLoaded } from "./doc-observable";
import { queryLoaded } from "./query-observable";
export * from "./query-observable";
export function extendFirestore() {
    _extendFirestore();
    docLoaded;
    queryLoaded;
}
//# sourceMappingURL=index.js.map