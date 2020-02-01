import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {docsSnapshots} from "./docs-snapshots";
import {DocumentData} from "./types/shared";

export async function docsData<T = DocumentData>(query: admin.Query<T>): Promise<T[]>;

export async function docsData<T = DocumentData>(query: client.Query<T>, options?: client.GetOptions & client.SnapshotOptions): Promise<T[]>;

export async function docsData<T = DocumentData>(query: client.Query<T> | admin.Query<T>, options?: client.GetOptions & client.SnapshotOptions): Promise<T[]> {
    const data: T[] = [];

    for (const snapshot of await (query instanceof client.Query ? docsSnapshots(query, options) : docsSnapshots(query))) {
        data.push(snapshot.data());
    }

    return data;
}
