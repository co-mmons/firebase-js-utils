import {docsSnapshots} from "./docs-snapshots";
import {DocumentData} from "./shared-types";
import {firestoreAdminTypes, firestoreClientTypes} from "./types";
import {Query} from "./union-types";

export async function docsData<T = DocumentData>(query: firestoreAdminTypes.Query<T>): Promise<T[]>;

export async function docsData<T = DocumentData>(query: firestoreClientTypes.Query<T>, options?: firestoreClientTypes.GetOptions & firestoreClientTypes.SnapshotOptions): Promise<T[]>;

export async function docsData<T = DocumentData>(query: Query<T>, options?: firestoreClientTypes.GetOptions & firestoreClientTypes.SnapshotOptions): Promise<T[]> {
    const data: T[] = [];

    for (const snapshot of await (Query.isClient(query) ? docsSnapshots(query, options) : docsSnapshots(query))) {
        data.push(snapshot.data());
    }

    return data;
}
