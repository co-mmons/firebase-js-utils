"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const auth_1 = require("../auth");
class UniversalAuthAdminImpl extends auth_1.UniversalAuth {
    constructor(auth) {
        super();
        this.auth = auth;
        this.admin = true;
        this.authInitialized = false;
        this.userObservable = new rxjs_1.ReplaySubject(1);
        this.userIdObservable = new rxjs_1.ReplaySubject(1);
        this.userIdTokenObservable = new rxjs_1.ReplaySubject(1);
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
exports.UniversalAuthAdminImpl = UniversalAuthAdminImpl;
//# sourceMappingURL=admin-auth.js.map