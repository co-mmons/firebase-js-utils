import { auth } from "firebase-admin";
import { ReplaySubject } from "rxjs";
import { UniversalAuth } from "../auth";
import { UserInfo } from "../user-info";
export declare class UniversalAuthAdminImpl extends UniversalAuth {
    readonly auth: auth.Auth;
    constructor(auth: auth.Auth);
    readonly admin = true;
    private authInitialized;
    initialized(): Promise<boolean>;
    readonly user: UserInfo;
    readonly userId: string;
    readonly userObservable: ReplaySubject<UserInfo>;
    readonly userIdObservable: ReplaySubject<string>;
    readonly userIdTokenObservable: ReplaySubject<string>;
    readonly userIdToken: Promise<string>;
    readonly offline: boolean;
    protected onAuthError(error: any): void;
    signInWithEmailAndPassword(email: string, password: string): Promise<void>;
    signOut(): Promise<void>;
}
