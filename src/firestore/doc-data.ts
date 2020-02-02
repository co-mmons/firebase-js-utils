import {DocumentData} from "./shared-types";
import {firestoreAdminTypes, firestoreClientTypes} from "./types";
import {DocumentReference} from "./union-types";

export async function docData<T = DocumentData>(doc: firestoreAdminTypes.DocumentReference<T>): Promise<T>;

export async function docData<T = DocumentData>(doc: firestoreClientTypes.DocumentReference<T>, options?: firestoreClientTypes.GetOptions & firestoreClientTypes.SnapshotOptions): Promise<T>;

export async function docData<T = DocumentData>(doc: DocumentReference<T>, options?: firestoreClientTypes.GetOptions & firestoreClientTypes.SnapshotOptions): Promise<T> {

    let data: any;
    if (DocumentReference.isClient(doc)) {
        data = (await doc.get(options)).data(options);
    } else if (DocumentReference.isAdmin(doc)) {
        data = (await doc.get()).data();
    } else {
        throw new Error("Invalid document reference");
    }

    return data as T;
}
