import {UniversalAuth} from "../auth";
import {UserInfo} from "../user-info";
import {AngularFireAuth} from "@angular/fire/auth";
import {Subscription, ReplaySubject, Observable} from "rxjs";
import {first, map} from "rxjs/operators";

export abstract class UniversalAuthAngularImpl extends UniversalAuth {

    constructor(public readonly auth: AngularFireAuth) {
        super();

        this.authSubscription = this.auth.idToken.subscribe(user => this.userChanged());
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
        return (this._user && this._user.uid) || null;
    }

    readonly userObservable: ReplaySubject<UserInfo> = new ReplaySubject<UserInfo>(1);

    readonly userIdObservable: ReplaySubject<string> = new ReplaySubject<string>(1);

    get userIdTokenObservable(): Observable<string> {
        return this.auth.idToken;
    }

    get userIdToken(): Promise<string> {
        return this.auth.auth.currentUser.getIdToken();
    }

    private async userChanged() {

        let user = this.auth.auth.currentUser;
        let changed = !this.authInitialized || (!this._user && user) || (this._user && !user) || (this._user && user && this._user.uid != user.uid) ? true : false;

        this._user = user;
        this.authInitialized = true;

        if (!user && this.offline) {
            this.userObservable.next(null);
            this.userIdObservable.next(null);

        } else if (changed) {
            this.userObservable.next(this._user ? this._user : null);
            this.userIdObservable.next(this._user ? this._user.uid : null);
        }
    }

    get offline(): boolean {
        return false;
    }

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