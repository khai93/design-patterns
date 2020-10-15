"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(FirstName, LastName) {
        this._firstName = FirstName;
        this._lastName = LastName;
    }
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.greet = function (user) {
        console.log("Hello " + user.firstName + " " + user.lastName + ", my name is " + this._firstName + " " + this._lastName);
    };
    return User;
}());
exports.User = User;
