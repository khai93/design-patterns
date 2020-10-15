"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
var adminUser_1 = require("./adminUser");
var user_1 = require("./user");
var vipUser_1 = require("./vipUser");
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.prototype.createUser = function (userOptions) {
        switch (userOptions.rank.toLowerCase()) {
            case "user":
                var user = new user_1.User(userOptions.firstName, userOptions.lastName);
                return user;
            case "vip":
                var vipUser = new vipUser_1.VipUser(userOptions.firstName, userOptions.lastName);
                return vipUser;
            case "admin":
                var adminUser = new adminUser_1.AdminUser(userOptions.firstName, userOptions.lastName);
                return adminUser;
            default:
                throw new Error("Incorrect user rank!");
        }
    };
    return UserFactory;
}());
exports.UserFactory = UserFactory;
