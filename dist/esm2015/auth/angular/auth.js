import * as tslib_1 from "tslib";
import { UniversalAuth } from "../auth";
import { ReplaySubject } from "rxjs";
import { first, map } from "rxjs/operators";
import { sleep } from "@co.mmons/js-utils/core";
export class UniversalAuthAngularImpl extends UniversalAuth {
    constructor(auth) {
        super();
        this.auth = auth;
        this.admin = false;
        this.authInitialized = false;
        this.userObservable = new ReplaySubject(1);
        this.userIdObservable = new ReplaySubject(1);
        this.authSubscription = this.auth.user.subscribe(user => this.userChanged());
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
        return (this._user && this._user.uid) || null;
    }
    get userIdTokenObservable() {
        return this.auth.idToken;
    }
    get userIdToken() {
        return this.auth.auth.currentUser.getIdToken();
    }
    userChanged() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let user = this.auth.auth.currentUser;
            let changed = !this.authInitialized || (!this._user && user) || (this._user && !user) || (this._user && user && this._user.uid != user.uid) ? true : false;
            this._user = user;
            this.authInitialized = true;
            if (!user && this.offline) {
                this.userObservable.next(null);
                this.userIdObservable.next(null);
            }
            else if (changed) {
                this.userObservable.next(this._user ? this._user : null);
                this.userIdObservable.next(this._user ? this._user.uid : null);
            }
        });
    }
    get offline() {
        return false;
    }
    signInWithEmailAndPassword(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.auth.auth.signInWithEmailAndPassword(email, password);
        });
    }
    signOut() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._user = null;
            this.userObservable.next(null);
            this.userIdObservable.next(null);
            yield sleep(1000);
            yield this.auth.auth.signOut();
        });
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
}
//# sourceMappingURL=auth.js.map