"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userFactory_1 = require("./userFactory");
var userFactory = new userFactory_1.UserFactory();
var user1Opts = {
    rank: 'User',
    firstName: 'John',
    lastName: 'MayBerry'
};
var user2Opts = {
    rank: 'VIP',
    firstName: 'Mark',
    lastName: 'Hemster'
};
var user3Opts = {
    rank: 'Admin',
    firstName: 'Ryan',
    lastName: 'Chi'
};
var user1 = userFactory.createUser(user1Opts);
var user2 = userFactory.createUser(user2Opts);
var user3 = userFactory.createUser(user3Opts);
var userWarningMessage = function (user) { return console.log(user.firstName + " has " + user.warnings + " warnings"); };
user1.greet(user2);
user2.greet(user1);
user3.greet(user2);
userWarningMessage(user1);
user3.warn(user1);
userWarningMessage(user1);
