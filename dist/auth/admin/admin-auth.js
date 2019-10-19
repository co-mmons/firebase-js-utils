"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("signInWithEmailAndPassword not available in firebase admin");
        });
    }
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("signInWithEmailAndPassword not available in firebase admin");
        });
    }
}
exports.UniversalAuthAdminImpl = UniversalAuthAdminImpl;
//# sourceMappingURL=admin-auth.js.map