import * as tslib_1 from "tslib";
import { UniversalAuth } from "../auth";
import { ReplaySubject } from "rxjs";
import { first, map } from "rxjs/operators";
import { sleep } from "@co.mmons/js-utils/core";
var UniversalAuthAngularImpl = /** @class */ (function (_super) {
    tslib_1.__extends(UniversalAuthAngularImpl, _super);
    function UniversalAuthAngularImpl(auth) {
        var _this = _super.call(this) || this;
        _this.auth = auth;
        _this.admin = false;
        _this.authInitialized = false;
        _this.userObservable = new ReplaySubject(1);
        _this.userIdObservable = new ReplaySubject(1);
        _this.authSubscription = _this.auth.user.subscribe(function (user) { return _this.userChanged(); });
        return _this;
    }
    UniversalAuthAngularImpl.prototype.initialized = function () {
        if (this.authInitialized) {
            return Promise.resolve(true);
        }
        else {
            return this.userIdObservable.pipe(first(), map(function (id) { return true; })).toPromise();
        }
    };
    Object.defineProperty(UniversalAuthAngularImpl.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalAuthAngularImpl.prototype, "userId", {
        get: function () {
            return (this._user && this._user.uid) || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalAuthAngularImpl.prototype, "userIdTokenObservable", {
        get: function () {
            return this.auth.idToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalAuthAngularImpl.prototype, "userIdToken", {
        get: function () {
            return this.auth.auth.currentUser.getIdToken();
        },
        enumerable: true,
        configurable: true
    });
    UniversalAuthAngularImpl.prototype.userChanged = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, changed;
            return tslib_1.__generator(this, function (_a) {
                user = this.auth.auth.currentUser;
                changed = !this.authInitialized || (!this._user && user) || (this._user && !user) || (this._user && user && this._user.uid != user.uid) ? true : false;
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
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(UniversalAuthAngularImpl.prototype, "offline", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    UniversalAuthAngularImpl.prototype.signInWithEmailAndPassword = function (email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.auth.signInWithEmailAndPassword(email, password)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UniversalAuthAngularImpl.prototype.signOut = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._user = null;
                        this.userObservable.next(null);
                        this.userIdObservable.next(null);
                        return [4 /*yield*/, sleep(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.auth.auth.signOut()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UniversalAuthAngularImpl.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    return UniversalAuthAngularImpl;
}(UniversalAuth));
export { UniversalAuthAngularImpl };
//# sourceMappingURL=auth.js.map