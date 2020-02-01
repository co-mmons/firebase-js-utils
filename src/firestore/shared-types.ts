/**
 * Document data (for use with `DocumentReference.set()`) consists of fields
 * mapped to values.
 */
export interface DocumentData {
    [field: string]: any
}

/**
 * Update data (for use with `DocumentReference.update()`) consists of field
 * paths (e.g. 'foo' or 'foo.baz') mapped to values. Fields that contain dots
 * reference nested fields within the document.
 */
export type UpdateData = {
    [fieldPath: string]: any
}

/**
 * Converter used by `withConverter()` to transform user objects of type T
 * into Firestore data.
 *
 * Using the converter allows you to specify generic type arguments when
 * storing and retrieving objects from Firestore.
 *
 * @example
 * class Post {
 *   constructor(readonly title: string, readonly author: string) {}
 *
 *   toString(): string {
 *     return this.title + ', by ' + this.author;
 *   }
 * }
 *
 * const postConverter = {
 *   toFirestore(post: Post): FirebaseFirestore.DocumentData {
 *     return {title: post.title, author: post.author};
 *   },
 *   fromFirestore(
 *     data: FirebaseFirestore.DocumentData
 *   ): Post {
 *     return new Post(data.title, data.author);
 *   }
 * };
 *
 * const postSnap = await firestore()
 *   .collection('posts')
 *   .withConverter(postConverter)
 *   .doc().get();
 * const post = postSnap.data();
 * if (post !== undefined) {
 *   post.title; // string
 *   post.toString(); // Should be defined
 *   post.someNonExistentProperty; // TS error
 * }
 */
export interface FirestoreDataConverter<T> {

    /**
     * Called by the Firestore SDK to convert a custom model object of type T
     * into a plain Javascript object (suitable for writing directly to the
     * Firestore database).
     */
    toFirestore(modelObject: T): DocumentData;

    /**
     * Called by the Firestore SDK to convert Firestore data into an object of
     * type T.
     */
    fromFirestore(data: DocumentData): T;

}
