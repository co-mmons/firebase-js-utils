import {FirebaseAdminModule} from "../FirebaseAdminModule";
import {FirebaseClientModule} from "../FirebaseClientModule";
import {docsSnapshots} from "./docsSnapshots";
import {DocumentData} from "./shared-types";
import {Query} from "./union-types";

export async function docsData<T = DocumentData>(query: FirebaseAdminModule.firestore.Query<T>): Promise<T[]>;

export async function docsData<T = DocumentData>(query: FirebaseClientModule.firestore.Query<T>, options?: FirebaseClientModule.firestore.GetOptions & FirebaseClientModule.firestore.SnapshotOptions): Promise<T[]>;

export async function docsData<T = DocumentData>(query: Query<T>, options?: FirebaseClientModule.firestore.GetOptions & FirebaseClientModule.firestore.SnapshotOptions): Promise<T[]> {
    const data: T[] = [];

    for (const snapshot of await (Query.isClient(query) ? docsSnapshots(query, options) : docsSnapshots(query))) {
        data.push(snapshot.data());
    }

    return data;
}
