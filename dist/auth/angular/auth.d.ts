import { UniversalAuth } from "../auth";
import { UserInfo } from "../user-info";
import { AngularFireAuth } from "@angular/fire/auth";
import { ReplaySubject } from "rxjs";
export declare abstract class UniversalAuthAngularImpl extends UniversalAuth {
    readonly auth: AngularFireAuth;
    constructor(auth: AngularFireAuth);
    readonly admin = false;
    private authSubscription;
    private authInitialized;
    private _user;
    readonly user: import("firebase").User;
    readonly userId: string;
    readonly userObservable: ReplaySubject<UserInfo>;
    readonly userIdObservable: ReplaySubject<string>;
    private userChanged;
    readonly offline: boolean;
    protected abstract onAuthError(error: any): any;
    ngOnDestroy(): void;
}
