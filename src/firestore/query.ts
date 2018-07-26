import "firebase/firestore";
import {firestore, firestore as _firestore} from "firebase/app";

declare module "firebase/app" {

    namespace firestore {
        interface Firestore {
            docs(collection: string | _firestore.CollectionReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<_firestore.QueryDocumentSnapshot[]>;
            docsData<V = any>(collection: string | _firestore.CollectionReference, options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V[]>;
        }

        interface Query {
            
            docs(options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<_firestore.QueryDocumentSnapshot[]>;

            docsData<V = any>(options?: _firestore.GetOptions & _firestore.SnapshotOptions): Promise<V[]>;
        }
    }
}

firestore.Firestore.prototype.docs = function (this: firestore.Firestore, collection: string | _firestore.CollectionReference, options?: _firestore.GetOptions & firestore.SnapshotOptions): Promise<firestore.QueryDocumentSnapshot[]> {

    if (typeof collection == "string") {
        return this.docs(firestore().collection(collection), options);
    }

    return collection.docs(options);
}

firestore.Firestore.prototype.docsData = function <V = any>(this: firestore.Firestore, collection: string | _firestore.CollectionReference, options?: _firestore.GetOptions & firestore.SnapshotOptions): Promise<V[]> {
    
    if (typeof collection == "string") {
        return this.docsData<V>(firestore().collection(collection), options);
    }

    return collection.docsData();
}


firestore.Query.prototype.docsData = async function <V = any>(this: firestore.Query, options?: _firestore.GetOptions & firestore.SnapshotOptions): Promise<V[]> {

    let data: V[] = [];

    for (let d of (await this.get(options)).docs) {
        data.push(d.data(options) as V);
    }

    return data;
}

firestore.Query.prototype.docs = async function(this: firestore.Query, options?: _firestore.GetOptions & firestore.SnapshotOptions): Promise<_firestore.QueryDocumentSnapshot[]> {
    return (await this.get(options)).docs;
}
