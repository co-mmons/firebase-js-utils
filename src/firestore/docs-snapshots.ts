import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";
import {DocumentData} from "./types/shared";

export async function docsSnapshots<T = DocumentData>(query: admin.Query<T>): Promise<Array<admin.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: client.Query<T>, options?: client.GetOptions): Promise<Array<client.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: client.Query<T> | admin.Query<T>, options?: client.GetOptions) {

    if (query instanceof client.Query) {
        return (await query.get(options)).docs as Array<client.QueryDocumentSnapshot<T>>;
    } else if (query instanceof admin.Query) {
        return (await query.get()).docs as Array<admin.QueryDocumentSnapshot<T>>;
    } else {
        throw new Error("Invalid query");
    }
}
