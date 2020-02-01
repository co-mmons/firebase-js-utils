import {DocumentData} from "./shared-types";
import {firestoreAdmin, firestoreClient} from "./types";
import {DocumentReference} from "./union-types";

export async function docData<T = DocumentData>(doc: firestoreAdmin.DocumentReference<T>): Promise<T>;

export async function docData<T = DocumentData>(doc: firestoreClient.DocumentReference<T>, options?: firestoreClient.GetOptions & firestoreClient.SnapshotOptions): Promise<T>;

export async function docData<T = DocumentData>(doc: DocumentReference<T>, options?: firestoreClient.GetOptions & firestoreClient.SnapshotOptions): Promise<T> {

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
