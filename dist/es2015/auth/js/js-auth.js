"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const auth_1 = require("../auth");
class UniversalAuthJsImpl extends auth_1.UniversalAuth {
    constructor(auth) {
        super();
        this.auth = auth;
        this.authInitialized = false;
        this.userObservable = new rxjs_1.ReplaySubject(1);
        this.userIdObservable = new rxjs_1.ReplaySubject(1);
        this.admin = false;
        this.auth.onIdTokenChanged((user) => this.userChanged(user));
    }
    initialized() {
        if (this.authInitialized) {
            return Promise.resolve(true);
        }
        else {
            return this.userIdObservable.pipe(operators_1.first(), operators_1.map(id => true)).toPromise();
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
        return new rxjs_1.Observable(subscriber => {
            let unsubscribe = this.auth.onIdTokenChanged(subscriber);
            return () => unsubscribe();
        }).pipe(operators_1.switchMap(user => user.getIdToken()));
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
exports.UniversalAuthJsImpl = UniversalAuthJsImpl;
//# sourceMappingURL=js-auth.js.map