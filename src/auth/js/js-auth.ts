import {auth, User} from "firebase/app";
import {Observable, ReplaySubject} from "rxjs";
import {first, map, switchMap} from "rxjs/operators";
import {UniversalAuth} from "../auth";
import {UserInfo} from "../user-info";

export class UniversalAuthJsImpl extends UniversalAuth {

    constructor(private readonly auth: auth.Auth) {
        super();
        this.auth.onIdTokenChanged((user) => this.userChanged(user));
    }

    private authInitialized: boolean = false;

    initialized(): Promise<boolean> {
        if (this.authInitialized) {
            return Promise.resolve(true);
        } else {
            return this.userIdObservable.pipe(first(), map(id => true)).toPromise();
        }
    }

    private _user: firebase.User;
    
    get user(): UserInfo {
        return this._user;
    }

    get userId(): string {
        return this.user && this.user.uid;
    }

    readonly userObservable: ReplaySubject<UserInfo> = new ReplaySubject<UserInfo>(1);

    readonly userIdObservable: ReplaySubject<string> = new ReplaySubject<string>(1);
    
    readonly admin: boolean = false;

    get userIdToken(): Promise<string> {
        return this.auth.currentUser.getIdToken();
    }

    get userIdTokenObservable(): Observable<string> {

        return new Observable<User>(subscriber => {
            let unsubscribe = this.auth.onIdTokenChanged(subscriber);
            return () => unsubscribe();
        }).pipe(switchMap(user => user.getIdToken()));
    }

    private userChanged(user: User) {

        let changed = !this.authInitialized || (!this._user && user) || (this._user && !user) || (this._user && user && this._user.uid != user.uid) ? true : false;

        this._user = user;
        this.authInitialized = true;

        try {

            if (!user) {
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

    protected onAuthError(error: any) {
        console.error(error);
    }

    async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
        await this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut(): Promise<void> {
        return this.auth.signOut();
    }

}