import * as tslib_1 from "tslib";
import { ReplaySubject } from "rxjs";
import { UniversalAuth } from "../auth";
var UniversalAuthAdminImpl = /** @class */ (function (_super) {
    tslib_1.__extends(UniversalAuthAdminImpl, _super);
    function UniversalAuthAdminImpl(auth) {
        var _this = _super.call(this) || this;
        _this.auth = auth;
        _this.admin = true;
        _this.authInitialized = false;
        _this.userObservable = new ReplaySubject(1);
        _this.userIdObservable = new ReplaySubject(1);
        _this.userIdTokenObservable = new ReplaySubject(1);
        return _this;
    }
    UniversalAuthAdminImpl.prototype.initialized = function () {
        return Promise.resolve(true);
    };
    Object.defineProperty(UniversalAuthAdminImpl.prototype, "user", {
        get: function () {
            return { displayName: "Firebase Admin", email: "admin@firebase.google.com", uid: "?" };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalAuthAdminImpl.prototype, "userId", {
        get: function () {
            return "?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalAuthAdminImpl.prototype, "userIdToken", {
        get: function () {
            return new Promise(function (resolve, reject) { return null; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalAuthAdminImpl.prototype, "offline", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    UniversalAuthAdminImpl.prototype.onAuthError = function (error) {
        console.error(error);
    };
    UniversalAuthAdminImpl.prototype.signInWithEmailAndPassword = function (email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw new Error("signInWithEmailAndPassword not available in firebase admin");
            });
        });
    };
    UniversalAuthAdminImpl.prototype.signOut = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw new Error("signInWithEmailAndPassword not available in firebase admin");
            });
        });
    };
    return UniversalAuthAdminImpl;
}(UniversalAuth));
export { UniversalAuthAdminImpl };
//# sourceMappingURL=admin-auth.js.map