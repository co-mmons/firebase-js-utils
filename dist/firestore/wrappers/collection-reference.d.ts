import { FirestoreHelper } from "../helper";
import { CollectionReference } from "../types";
import { QueryWrapper } from "./query";
export declare class CollectionReferenceWrapper extends QueryWrapper implements CollectionReference {
    readonly firestore: FirestoreHelper;
    private readonly ref;
    constructor(firestore: FirestoreHelper, ref: CollectionReference);
    readonly id: string;
    readonly parent: import("../../../../../../../Volumes/Dane/Projekty/co.mmons.firebase-js-utils/src/firestore/types").DocumentReference;
    readonly path: string;
    doc(documentPath?: string): import("../../../../../../../Volumes/Dane/Projekty/co.mmons.firebase-js-utils/src/firestore/types").DocumentReference;
    add(data: any): Promise<import("../../../../../../../Volumes/Dane/Projekty/co.mmons.firebase-js-utils/src/firestore/types").DocumentReference>;
}
