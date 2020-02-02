import {sleep} from "@co.mmons/js-utils/core";
import {firestoreAdminModuleTypes, firestoreClientModuleTypes} from "./types";
import {Query} from "./union-types";

export interface DeleteOptions {
    readLimit?: number;
    batch?: boolean;
    batchRetryCount?: number;
    batchRetryDelay?: number;
}

/**
 * Options in admin mode.
 */
export interface DeleteOptionsAdmin extends DeleteOptions {
    subcollections?: boolean;
}

export async function deleteQuery(query: firestoreAdminModuleTypes.Query, options?: DeleteOptionsAdmin);

export async function deleteQuery(query: firestoreClientModuleTypes.Query, options?: DeleteOptions);

export async function deleteQuery(query: Query, options?: DeleteOptions & DeleteOptionsAdmin) {

    if (!options) {
        options = {};
    }

    if (options.readLimit) {
        query = query.limit(options.readLimit);
    }

    const snapshot = await query.get();

    let deleteCount = 0;

    // when there are no documents left, we are done
    if (snapshot.size === 0) {
        return 0;
    }

    for (const d of snapshot.docs) {

        if (options.batch === false) {
            try {
                await d.ref.delete();
                deleteCount++;

            } catch (error) {
                console.warn(error);
            }
        }
    }

    if (options.batch !== false) {

        const docs = snapshot.docs.slice() as Array<typeof query extends firestoreClientModuleTypes.Query ? firestoreClientModuleTypes.QueryDocumentSnapshot : firestoreAdminModuleTypes.QueryDocumentSnapshot>;

        while (docs.length > 0) {

            const part = docs.splice(0, 499);
            const batch = query.firestore.batch() as (typeof query extends firestoreClientModuleTypes.Query ? firestoreClientModuleTypes.WriteBatch : firestoreAdminModuleTypes.WriteBatch);

            for (const doc of part) {
                batch.delete(doc.ref);
            }

            for (let i = 1; i <= (options.batchRetryCount > 1 ? options.batchRetryCount : 1); i++) {

                try {
                    await batch.commit();
                    deleteCount = part.length;
                    break;

                } catch (error) {
                    console.warn(error);

                    if (i < (options.batchRetryCount > 1 ? options.batchRetryCount : 1)) {
                        await sleep(options.batchRetryDelay || (2000 * i));
                    }
                }
            }
        }
    }

    if (deleteCount > 0 && options.subcollections !== false && Query.isAdmin(query)) {
        for (const doc of snapshot.docs as Array<firestoreAdminModuleTypes.QueryDocumentSnapshot>) {
            for (const collection of (await doc.ref.listCollections())) {
                await deleteQuery(collection, options);
            }
        }
    }

    return deleteCount + (!options.readLimit || (options.readLimit > 0 && deleteCount < options.readLimit) ? 0 : await deleteQuery(query as any, options));
}
