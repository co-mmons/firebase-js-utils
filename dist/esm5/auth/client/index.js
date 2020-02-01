import { Observable, ReplaySubject } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";
var AuthUserClient = /** @class */ (function () {
    function AuthUserClient(auth) {
        var _this = this;
        this.auth = auth;
        this.authInitialized = false;
        this.userObservable = new ReplaySubject(1);
        this.userIdObservable = new ReplaySubject(1);
        this.auth.onIdTokenChanged(function (user) { return _this.userChanged(user); });
    }
    Object.defineProperty(AuthUserClient.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthUserClient.prototype, "userId", {
        get: function () {
            return this.user && this.user.uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthUserClient.prototype, "userIdToken", {
        get: function () {
            return this.auth.currentUser.getIdToken();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthUserClient.prototype, "userIdTokenObservable", {
        get: function () {
            var _this = this;
            return new Observable(function (subscriber) {
                var unsubscribe = _this.auth.onIdTokenChanged(subscriber);
                return function () { return unsubscribe(); };
            }).pipe(switchMap(function (user) { return user.getIdToken(); }));
        },
        enumerable: true,
        configurable: true
    });
    AuthUserClient.prototype.userChanged = function (user) {
        var changed = !this.authInitialized || (!this._user && !!user) || (this._user && !user) || (this._user && user && this._user.uid !== user.uid);
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
    };
    AuthUserClient.prototype.onAuthError = function (error) {
        console.error(error);
    };
    AuthUserClient.prototype.initialized = function () {
        if (this.authInitialized) {
            return Promise.resolve(true);
        }
        else {
            return this.userIdObservable.pipe(first(), map(function (id) { return true; })).toPromise();
        }
    };
    return AuthUserClient;
}());
export { AuthUserClient };
//# sourceMappingURL=index.js.map