import {UniversalAuth} from "../auth";
import {UserInfo} from "../user-info";
import {AngularFireAuth} from "@angular/fire/auth";
import {Subscription, ReplaySubject} from "rxjs";
import {first, map} from "rxjs/operators";

export abstract class UniversalAuthAngularImpl extends UniversalAuth {

    constructor(public readonly auth: AngularFireAuth) {
        super();

        this.authSubscription = this.auth.idToken.subscribe(user => this.userChanged(), error => this.onAuthError(error));
    }

    readonly admin = false;

    private authSubscription: Subscription;

    private authInitialized: boolean = false;

    initialized(): Promise<boolean> {
        if (this.authInitialized) {
            return Promise.resolve(true);
        } else {
            return this.userIdObservable.pipe(first(), map(id => true)).toPromise();
        }
    }

    private _user: firebase.User;
    
    get user() {
        return this._user;
    }
    
    get userId() {
        return this._user.uid;
    }

    readonly userObservable: ReplaySubject<UserInfo> = new ReplaySubject<UserInfo>(1);

    readonly userIdObservable: ReplaySubject<string> = new ReplaySubject<string>(1);

    private async userChanged() {

        let user = this.auth.auth.currentUser;
        let changed = !this.authInitialized || (!this._user && user) || (this._user && !user) || (this._user && user && this._user.uid != user.uid) ? true : false;

        this._user = user;
        this.authInitialized = true;

        try {

            if (!user && this.offline) {
                this.userObservable.next(null);
                this.userIdObservable.next(null);

            } else if (changed) {
                this.userObservable.next(this._user ? this._user : null);
                this.userIdObservable.next(this._user ? this._user.uid : null);
            }

        } catch (e) {
            this.onAuthError(e);
        }
    }

    get offline(): boolean {
        return false;
    }

    protected abstract onAuthError(error: any);

    async signInWithEmailAndPassword(email: string, password: string) {
        await this.auth.auth.signInWithEmailAndPassword(email, password);
    }

    signOut() {
        return this.auth.auth.signOut();
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }

}