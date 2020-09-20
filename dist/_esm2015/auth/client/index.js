import { Observable, of, ReplaySubject, throwError } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";
export class AuthUserClient {
    constructor(auth) {
        this.auth = auth;
        this.authInitialized = false;
        this.userObservable = new ReplaySubject(1);
        this.userIdObservable = new ReplaySubject(1);
        this.auth.onIdTokenChanged((user) => this.userChanged(user));
    }
    get user() {
        return this._user;
    }
    get userId() {
        return this.user && this.user.uid;
    }
    get userIdToken() {
        var _a;
        return (_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken();
    }
    get userIdTokenObservable() {
        return new Observable(subscriber => {
            let unsubscribe = this.auth.onIdTokenChanged(subscriber);
            return () => unsubscribe();
        }).pipe(switchMap(user => user.getIdToken()));
    }
    userChanged(user) {
        const changed = !this.authInitialized || (!this._user && !!user) || (this._user && !user) || (this._user && user && this._user.uid !== user.uid);
        this._user = user;
        this.authInitialized = true;
        try {
            if (!user) {
                this.userObservable.next(null);
                this.userIdObservable.next(null);
            }
            else if (changed) {
                this.userObservable.next(this._user ? this._user : null);
                this.userIdObservable.next(this._user ? this._user.uid : null);
            }
        }
        catch (e) {
            this.onAuthError(e);
        }
    }
    onAuthError(error) {
        console.error(error);
    }
    initialized() {
        if (this.authInitialized) {
            return Promise.resolve(true);
        }
        else {
            return this.userIdObservable.pipe(first(), map(id => true)).toPromise();
        }
    }
    userNotSignedError() {
        return new Error("User not signed");
    }
    observeUser(assertSigned) {
        return this.userObservable.pipe(switchMap(user => user || !assertSigned ? of(user) : throwError(this.userNotSignedError())));
    }
}
//# sourceMappingURL=index.js.map