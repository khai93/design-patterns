"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var vipUser_1 = require("./vipUser");
var user1 = new user_1.User("John", "Mayberry");
var user2 = new vipUser_1.VipUser("Mark", "Hemster");
user2.greet(user1);
