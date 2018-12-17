import {auth} from "firebase-admin";
import {ReplaySubject} from "rxjs";
import {UniversalAuth} from "../auth";
import {UserInfo} from "../user-info";

export class UniversalAuthAdminImpl extends UniversalAuth {

    constructor(public readonly auth: auth.Auth) {
        super();
    }

    readonly admin = true;

    private authInitialized: boolean = false;

    initialized(): Promise<boolean> {
        return Promise.resolve(true);
    }

    get user() {
        return {displayName: "Firebase Admin", email: "admin@firebase.google.com", uid: "?"} as UserInfo;
    }

    get userId() {
        return "?";
    }

    readonly userObservable: ReplaySubject<UserInfo> = new ReplaySubject(1);

    readonly userIdObservable: ReplaySubject<string> = new ReplaySubject(1);

    readonly userIdTokenObservable: ReplaySubject<string> = new ReplaySubject(1);

    get userIdToken(): Promise<string> {
        return new Promise((resolve, reject) => null);
    }

    get offline(): boolean {
        return false;
    }

    protected onAuthError(error: any) {
        console.error(error);
    }

    async signInWithEmailAndPassword(email: string, password: string) {
        throw new Error("signInWithEmailAndPassword not available in firebase admin");
    }

    async signOut() {
        throw new Error("signInWithEmailAndPassword not available in firebase admin");
    }
}