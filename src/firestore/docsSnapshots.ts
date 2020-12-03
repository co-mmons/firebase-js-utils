import {FirebaseAdminModule} from "../FirebaseAdminModule";
import {FirebaseClientModule} from "../FirebaseClientModule";
import {extractGetOptions} from "./client/extractGetOptions";
import {DocumentData} from "./shared-types";
import {Query} from "./union-types";

export async function docsSnapshots<T = DocumentData>(query: FirebaseAdminModule.firestore.Query<T>): Promise<Array<FirebaseAdminModule.firestore.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: FirebaseClientModule.firestore.Query<T>, options?: FirebaseClientModule.firestore.GetOptions): Promise<Array<FirebaseClientModule.firestore.QueryDocumentSnapshot<T>>>;

export async function docsSnapshots<T = DocumentData>(query: Query<T>, options?: FirebaseClientModule.firestore.GetOptions) {

    if (Query.isClient(query)) {
        return (await query.get(extractGetOptions(options))).docs;
    } else if (Query.isAdmin(query)) {
        return (await query.get()).docs;
    } else {
        throw new Error("Invalid query");
    }
}
