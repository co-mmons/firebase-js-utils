import { UniversalAuth } from "../auth";
import { UserInfo } from "../user-info";
import { AngularFireAuth } from "@angular/fire/auth";
import { ReplaySubject, Observable } from "rxjs";
export declare abstract class UniversalAuthAngularImpl extends UniversalAuth {
    readonly auth: AngularFireAuth;
    constructor(auth: AngularFireAuth);
    readonly admin = false;
    private authSubscription;
    private authInitialized;
    initialized(): Promise<boolean>;
    private _user;
    readonly user: import("firebase").User;
    readonly userId: string;
    readonly userObservable: ReplaySubject<UserInfo>;
    readonly userIdObservable: ReplaySubject<string>;
    readonly userIdTokenObservable: Observable<string>;
    readonly userIdToken: Promise<string>;
    private userChanged;
    readonly offline: boolean;
    protected abstract onAuthError(error: any): any;
    signInWithEmailAndPassword(email: string, password: string): Promise<void>;
    signOut(): Promise<void>;
    ngOnDestroy(): void;
}
