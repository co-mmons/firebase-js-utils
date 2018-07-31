import "../firestore";
import {extendFirestore as _extendFirestore} from "../firestore";
import "./doc-observable";
import {docLoaded} from "./doc-observable";
import "./query-observable";
import {queryLoaded} from "./query-observable";

export function extendFirestore() {
    _extendFirestore();
    docLoaded;
    queryLoaded;
}