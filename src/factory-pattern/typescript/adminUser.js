"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUser = void 0;
var user_1 = require("./user");
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    AdminUser.prototype.greet = function (user) {
        console.log("Hi " + user.firstName + " " + user.lastName + ", I am an admin.");
    };
    AdminUser.prototype.warn = function (user) {
        console.log("You have been warned, " + user.firstName + ".");
        user.warnings = user.warnings + 1;
    };
    return AdminUser;
}(user_1.User));
exports.AdminUser = AdminUser;
