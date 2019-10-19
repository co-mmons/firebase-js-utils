import * as tslib_1 from "tslib";
import { Observable, ReplaySubject } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";
import { UniversalAuth } from "../auth";
export class UniversalAuthJsImpl extends UniversalAuth {
    constructor(auth) {
        super();
        this.auth = auth;
        this.authInitialized = false;
        this.userObservable = new ReplaySubject(1);
        this.userIdObservable = new ReplaySubject(1);
        this.admin = false;
        this.auth.onIdTokenChanged((user) => this.userChanged(user));
    }
    initialized() {
        if (this.authInitialized) {
            return Promise.resolve(true);
        }
        else {
            return this.userIdObservable.pipe(first(), map(id => true)).toPromise();
        }
    }
    get user() {
        return this._user;
    }
    get userId() {
        return this.user && this.user.uid;
    }
    get userIdToken() {
        return this.auth.currentUser.getIdToken();
    }
    get userIdTokenObservable() {
        return new Observable(subscriber => {
            let unsubscribe = this.auth.onIdTokenChanged(subscriber);
            return () => unsubscribe();
        }).pipe(switchMap(user => user.getIdToken()));
    }
    userChanged(user) {
        let changed = !this.authInitialized || (!this._user && user) || (this._user && !user) || (this._user && user && this._user.uid != user.uid) ? true : false;
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
    signInWithEmailAndPassword(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.auth.signInWithEmailAndPassword(email, password);
        });
    }
    signOut() {
        return this.auth.signOut();
    }
}
//# sourceMappingURL=js-auth.js.map