import {extractGetOptions} from "./client/extract-get-options";
import {extractSnapshotOptions} from "./client/extract-snapshot-options";
import {DocumentData} from "./shared-types";
import {firestoreAdminModuleTypes, firestoreClientModuleTypes} from "./types";
import {DocumentReference} from "./union-types";

export async function docData<T = DocumentData>(doc: firestoreAdminModuleTypes.DocumentReference<T>): Promise<T>;

export async function docData<T = DocumentData>(doc: firestoreClientModuleTypes.DocumentReference<T>, options?: firestoreClientModuleTypes.GetOptions & firestoreClientModuleTypes.SnapshotOptions): Promise<T>;

export async function docData<T = DocumentData>(doc: DocumentReference<T>, options?: firestoreClientModuleTypes.GetOptions & firestoreClientModuleTypes.SnapshotOptions): Promise<T> {

    let data: any;
    if (DocumentReference.isClient(doc)) {
        data = (await doc.get(extractGetOptions(options))).data(extractSnapshotOptions(options));
    } else if (DocumentReference.isAdmin(doc)) {
        data = (await doc.get()).data();
    } else {
        throw new Error("Invalid document reference");
    }

    return data as T;
}
