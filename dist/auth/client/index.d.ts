import firebase from "firebase/app";
import { Observable, ReplaySubject } from "rxjs";
import { AuthUser } from "../AuthUser";
import { User } from "../User";
export declare class AuthUserClient implements AuthUser {
    private readonly auth;
    constructor(auth: firebase.auth.Auth);
    private authInitialized;
    private _user;
    get user(): User;
    get userId(): string;
    readonly userObservable: ReplaySubject<User>;
    readonly userIdObservable: ReplaySubject<string>;
    get userIdToken(): Promise<string>;
    get userIdTokenObservable(): Observable<string>;
    private userChanged;
    protected onAuthError(error: any): void;
    initialized(): Promise<boolean>;
    protected userNotSignedError(): Error;
    observeUser(assertSigned?: boolean): Observable<User>;
}
