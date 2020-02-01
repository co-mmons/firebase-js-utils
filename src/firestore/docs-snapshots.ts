import * as admin from "@google-cloud/firestore";
import {DocumentData} from "./shared-types";
import {firestoreAdmin, firestoreClient} from "./types";
import {Query} from "./union-types";

export async function docsSnapshots<T = DocumentData>(query: firestoreAdmin.Query<T>): Promise<Array<admin.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: firestoreClient.Query<T>, options?: firestoreClient.GetOptions): Promise<Array<firestoreClient.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: Query<T>, options?: firestoreClient.GetOptions) {

    if (Query.isClient(query)) {
        return (await query.get(options)).docs;
    } else if (Query.isAdmin(query)) {
        return (await query.get()).docs;
    } else {
        throw new Error("Invalid query");
    }
}
