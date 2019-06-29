"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var firestore_1 = require("../firestore");
var transaction_wrapper_1 = require("../transaction-wrapper");
var write_batch_wrapper_1 = require("../write-batch-wrapper");
var UniversalFirestoreJsImpl = /** @class */ (function (_super) {
    __extends(UniversalFirestoreJsImpl, _super);
    function UniversalFirestoreJsImpl(firestore) {
        var _this = _super.call(this) || this;
        _this.firestore = firestore;
        return _this;
    }
    UniversalFirestoreJsImpl.prototype.collection = function (collectionPath) {
        return this.firestore.collection(collectionPath);
    };
    UniversalFirestoreJsImpl.prototype.doc = function (documentPath) {
        return this.firestore.doc(documentPath);
    };
    UniversalFirestoreJsImpl.prototype.runTransaction = function (updateFunction) {
        return this.firestore.runTransaction(function (transaction) { return updateFunction(new transaction_wrapper_1.TransactionWrapper(transaction)); });
    };
    UniversalFirestoreJsImpl.prototype.batch = function () {
        return new write_batch_wrapper_1.WriteBatchWrapper(this.firestore.batch());
    };
    Object.defineProperty(UniversalFirestoreJsImpl.prototype, "Timestamp", {
        get: function () {
            return app_1.firestore.Timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreJsImpl.prototype, "GeoPoint", {
        get: function () {
            return app_1.firestore.GeoPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreJsImpl.prototype, "FieldValue", {
        get: function () {
            return app_1.firestore.FieldValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversalFirestoreJsImpl.prototype, "FieldPath", {
        get: function () {
            return app_1.firestore.FieldPath;
        },
        enumerable: true,
        configurable: true
    });
    return UniversalFirestoreJsImpl;
}(firestore_1.UniversalFirestore));
exports.UniversalFirestoreJsImpl = UniversalFirestoreJsImpl;
//# sourceMappingURL=js-firestore.js.map