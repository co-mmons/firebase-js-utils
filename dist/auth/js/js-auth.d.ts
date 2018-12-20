import { auth } from "firebase/app";
import { Observable, ReplaySubject } from "rxjs";
import { UniversalAuth } from "../auth";
import { UserInfo } from "../user-info";
export declare class UniversalAuthJsImpl extends UniversalAuth {
    private readonly auth;
    constructor(auth: auth.Auth);
    private authInitialized;
    initialized(): Promise<boolean>;
    private _user;
    readonly user: UserInfo;
    readonly userId: string;
    readonly userObservable: ReplaySubject<UserInfo>;
    readonly userIdObservable: ReplaySubject<string>;
    readonly admin: boolean;
    readonly userIdToken: Promise<string>;
    readonly userIdTokenObservable: Observable<string>;
    private userChanged;
    protected onAuthError(error: any): void;
    signInWithEmailAndPassword(email: string, password: string): Promise<void>;
    signOut(): Promise<void>;
}
