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
exports.VipUser = void 0;
var user_1 = require("./user");
var VipUser = /** @class */ (function (_super) {
    __extends(VipUser, _super);
    function VipUser(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    // Overriding inheried user greet
    VipUser.prototype.greet = function (user) {
        console.log("Hello " + user.firstName + " " + user.lastName + ", I am a VIP user and my name is " + user.firstName + " " + user.lastName);
    };
    return VipUser;
}(user_1.User));
exports.VipUser = VipUser;
