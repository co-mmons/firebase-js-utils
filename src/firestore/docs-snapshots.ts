import * as admin from "@google-cloud/firestore";
import {extractGetOptions} from "./client/extract-get-options";
import {DocumentData} from "./shared-types";
import {firestoreAdminModuleTypes, firestoreClientModuleTypes} from "./types";
import {Query} from "./union-types";

export async function docsSnapshots<T = DocumentData>(query: firestoreAdminModuleTypes.Query<T>): Promise<Array<admin.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: firestoreClientModuleTypes.Query<T>, options?: firestoreClientModuleTypes.GetOptions): Promise<Array<firestoreClientModuleTypes.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: Query<T>, options?: firestoreClientModuleTypes.GetOptions) {

    if (Query.isClient(query)) {
        return (await query.get(extractGetOptions(options))).docs;
    } else if (Query.isAdmin(query)) {
        return (await query.get()).docs;
    } else {
        throw new Error("Invalid query");
    }
}
