import {sleep} from "@co.mmons/js-utils/core";
import * as client from "@firebase/firestore-types";
import * as admin from "@google-cloud/firestore";

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

export async function deleteQuery(query: admin.Query, options?: DeleteOptionsAdmin);

export async function deleteQuery(query: client.Query, options?: DeleteOptions);

export async function deleteQuery(query: client.Query | admin.Query, options?: DeleteOptions & DeleteOptionsAdmin) {

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

        const docs = snapshot.docs.slice() as Array<typeof query extends client.Query ? client.QueryDocumentSnapshot : admin.QueryDocumentSnapshot>;

        while (docs.length > 0) {

            const part = docs.splice(0, 499);
            const batch = query.firestore.batch() as (typeof query extends client.Query ? client.WriteBatch : admin.WriteBatch);

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

    if (deleteCount > 0 && options.subcollections !== false && query instanceof admin.Query) {
        for (const doc of snapshot.docs as Array<admin.QueryDocumentSnapshot>) {
            for (const collection of (await doc.ref.listCollections())) {
                await deleteQuery(collection, options);
            }
        }
    }

    return deleteCount + (!options.readLimit || (options.readLimit > 0 && deleteCount < options.readLimit) ? 0 : await deleteQuery(query as any, options));
}
