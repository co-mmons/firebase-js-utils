import {FirebaseAdminModule} from "../FirebaseAdminModule";
import {FirebaseClientModule} from "../FirebaseClientModule";
import {extractGetOptions} from "./client/extractGetOptions";
import {extractSnapshotOptions} from "./client/extractSnapshotOptions";
import {DocumentData} from "./shared-types";
import {DocumentReference} from "./union-types";

export async function docData<T = DocumentData>(doc: FirebaseAdminModule.firestore.DocumentReference<T>): Promise<T>;

export async function docData<T = DocumentData>(doc: FirebaseClientModule.firestore.DocumentReference<T>, options?: FirebaseClientModule.firestore.GetOptions & FirebaseClientModule.firestore.SnapshotOptions): Promise<T>;

export async function docData<T = DocumentData>(doc: DocumentReference<T>, options?: FirebaseClientModule.firestore.GetOptions & FirebaseClientModule.firestore.SnapshotOptions): Promise<T> {

    let data: any;
    if (DocumentReference.isClient(doc)) {
        data = (await doc.get(extractGetOptions(options))).data(extractSnapshotOptions(options));
    } else if (DocumentReference.isAdmin(doc)) {
        data = (await doc.get()).data();
    } else {
        throw new Error("Invalid document reference");
    }

    return data as T;
}
