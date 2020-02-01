import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {DocumentData} from "./shared-types";

export async function docData<T = DocumentData>(doc: admin.DocumentReference<T>): Promise<T>;

export async function docData<T = DocumentData>(doc: client.DocumentReference<T>, options?: client.GetOptions & client.SnapshotOptions): Promise<T>;

export async function docData<T = DocumentData>(doc: client.DocumentReference<T> | admin.DocumentReference<T>, options?: client.GetOptions & client.SnapshotOptions): Promise<T> {

    let data: any;
    if (doc instanceof client.DocumentReference) {
        data = (await doc.get(options)).data(options);
    } else if (doc instanceof admin.DocumentReference) {
        data = (await doc.get()).data();
    } else {
        throw new Error("Invalid document reference");
    }

    return data as T;
}
