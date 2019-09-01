import * as tslib_1 from "tslib";
import { Observable, ReplaySubject } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";
import { UniversalAuth } from "../auth";
var UniversalAuthJsImpl = /** @class */ (function (_super) {
    tslib_1.__extends(UniversalAuthJsImpl, _super);
    function UniversalAuthJsImpl(auth) {
        var _this = _super.call(this) || this;
        _this.auth = auth;
        _this.authInitialized = false;
        _this.userObservable = new ReplaySubject(1);
        _this.userIdObservable = new ReplaySubject(1);
        _this.admin = false;
        _this.auth.onIdTokenChanged(function (user) { return _this.userChanged(user); });
        return _this;
    }
    UniversalAuthJsImpl.prototype.initialized = function () {
        if (this.authInitialized) {
            return Promise.resolve(true);
        }
        else {
            return this.userIdObservable.pipe(first(), map(function (id) { return true; })).toPromise();
        }
    };
    Object.defineProperty(UniversalAuthJsImpl.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalAuthJsImpl.prototype, "userId", {
        get: function () {
            return this.user && this.user.uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalAuthJsImpl.prototype, "userIdToken", {
        get: function () {
            return this.auth.currentUser.getIdToken();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalAuthJsImpl.prototype, "userIdTokenObservable", {
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
    UniversalAuthJsImpl.prototype.userChanged = function (user) {
        var changed = !this.authInitialized || (!this._user && user) || (this._user && !user) || (this._user && user && this._user.uid != user.uid) ? true : false;
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
    UniversalAuthJsImpl.prototype.onAuthError = function (error) {
        console.error(error);
    };
    UniversalAuthJsImpl.prototype.signInWithEmailAndPassword = function (email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.signInWithEmailAndPassword(email, password)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UniversalAuthJsImpl.prototype.signOut = function () {
        return this.auth.signOut();
    };
    return UniversalAuthJsImpl;
}(UniversalAuth));
export { UniversalAuthJsImpl };
//# sourceMappingURL=js-auth.js.map