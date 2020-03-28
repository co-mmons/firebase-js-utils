import {auth, User as FirebaseUser} from "firebase/app";
import {Observable, of, ReplaySubject, throwError} from "rxjs";
import {first, map, switchMap} from "rxjs/operators";
import {AuthUser} from "../auth-user";
import {User} from "../user";

export class AuthUserClient implements AuthUser {

    constructor(private readonly auth: auth.Auth) {
        this.auth.onIdTokenChanged((user) => this.userChanged(user));
    }

    private authInitialized: boolean = false;

    private _user: FirebaseUser;
    
    get user(): User {
        return this._user;
    }

    get userId(): string {
        return this.user && this.user.uid;
    }

    readonly userObservable: ReplaySubject<User> = new ReplaySubject<User>(1);

    readonly userIdObservable: ReplaySubject<string> = new ReplaySubject<string>(1);

    get userIdToken(): Promise<string> {
        return this.auth.currentUser?.getIdToken();
    }

    get userIdTokenObservable(): Observable<string> {

        return new Observable<FirebaseUser>(subscriber => {
            let unsubscribe = this.auth.onIdTokenChanged(subscriber);
            return () => unsubscribe();
        }).pipe(switchMap(user => user.getIdToken()));
    }

    private userChanged(user: FirebaseUser) {

        const changed = !this.authInitialized || (!this._user && !!user) || (this._user && !user) || (this._user && user && this._user.uid !== user.uid);

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

    initialized(): Promise<boolean> {
        if (this.authInitialized) {
            return Promise.resolve(true);
        } else {
            return this.userIdObservable.pipe(first(), map(id => true)).toPromise();
        }
    }

    protected userNotSignedError() {
        return new Error("User not signed");
    }

    observeUser(assertSigned?: boolean): Observable<User> {
        return this.userObservable.pipe(switchMap(user => user || !assertSigned ? of(user) : throwError(this.userNotSignedError())));
    }

}
