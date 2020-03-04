import {docsSnapshots} from "./docs-snapshots";
import {DocumentData} from "./shared-types";
import {firestoreAdminModuleTypes, firestoreClientModuleTypes} from "./types";
import {Query} from "./union-types";

export async function docsData<T = DocumentData>(query: firestoreAdminModuleTypes.Query<T>): Promise<T[]>;

export async function docsData<T = DocumentData>(query: firestoreClientModuleTypes.Query<T>, options?: firestoreClientModuleTypes.GetOptions & firestoreClientModuleTypes.SnapshotOptions): Promise<T[]>;

export async function docsData<T = DocumentData>(query: Query<T>, options?: firestoreClientModuleTypes.GetOptions & firestoreClientModuleTypes.SnapshotOptions): Promise<T[]> {
    const data: T[] = [];

    for (const snapshot of await (Query.isClient(query) ? docsSnapshots(query, options) : docsSnapshots(query))) {
        data.push(snapshot.data());
    }

    return data;
}
