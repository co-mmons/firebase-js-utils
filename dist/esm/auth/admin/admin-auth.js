import * as tslib_1 from "tslib";
import { ReplaySubject } from "rxjs";
import { UniversalAuth } from "../auth";
export class UniversalAuthAdminImpl extends UniversalAuth {
    constructor(auth) {
        super();
        this.auth = auth;
        this.admin = true;
        this.authInitialized = false;
        this.userObservable = new ReplaySubject(1);
        this.userIdObservable = new ReplaySubject(1);
        this.userIdTokenObservable = new ReplaySubject(1);
    }
    initialized() {
        return Promise.resolve(true);
    }
    get user() {
        return { displayName: "Firebase Admin", email: "admin@firebase.google.com", uid: "?" };
    }
    get userId() {
        return "?";
    }
    get userIdToken() {
        return new Promise((resolve, reject) => null);
    }
    get offline() {
        return false;
    }
    onAuthError(error) {
        console.error(error);
    }
    signInWithEmailAndPassword(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            throw new Error("signInWithEmailAndPassword not available in firebase admin");
        });
    }
    signOut() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            throw new Error("signInWithEmailAndPassword not available in firebase admin");
        });
    }
}
//# sourceMappingURL=admin-auth.js.map