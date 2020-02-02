import * as admin from "@google-cloud/firestore";
import {DocumentData} from "./shared-types";
import {firestoreAdminTypes, firestoreClientTypes} from "./types";
import {Query} from "./union-types";

export async function docsSnapshots<T = DocumentData>(query: firestoreAdminTypes.Query<T>): Promise<Array<admin.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: firestoreClientTypes.Query<T>, options?: firestoreClientTypes.GetOptions): Promise<Array<firestoreClientTypes.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: Query<T>, options?: firestoreClientTypes.GetOptions) {

    if (Query.isClient(query)) {
        return (await query.get(options)).docs;
    } else if (Query.isAdmin(query)) {
        return (await query.get()).docs;
    } else {
        throw new Error("Invalid query");
    }
}
