import "../firestore";
import {extendFirestore as _extendFirestore} from "../firestore";
import "./declarations";
export * from "./doc-observable";
import {loadDoc} from "./doc-observable";
import {loadQuery} from "./query-observable";
export * from "./query-observable";

export function extendFirestore() {
    _extendFirestore();
    loadDoc();
    loadQuery();
}