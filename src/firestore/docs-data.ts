import {docsSnapshots} from "./docs-snapshots";
import {DocumentData} from "./shared-types";
import {firestoreAdmin, firestoreClient} from "./types";
import {Query} from "./union-types";

export async function docsData<T = DocumentData>(query: firestoreAdmin.Query<T>): Promise<T[]>;

export async function docsData<T = DocumentData>(query: firestoreClient.Query<T>, options?: firestoreClient.GetOptions & firestoreClient.SnapshotOptions): Promise<T[]>;

export async function docsData<T = DocumentData>(query: Query<T>, options?: firestoreClient.GetOptions & firestoreClient.SnapshotOptions): Promise<T[]> {
    const data: T[] = [];

    for (const snapshot of await (Query.isClient(query) ? docsSnapshots(query, options) : docsSnapshots(query))) {
        data.push(snapshot.data());
    }

    return data;
}
