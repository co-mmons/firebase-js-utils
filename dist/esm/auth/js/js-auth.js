var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Observable, ReplaySubject } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";
import { UniversalAuth } from "../auth";
var UniversalAuthJsImpl = /** @class */ (function (_super) {
    __extends(UniversalAuthJsImpl, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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