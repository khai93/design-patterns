import { UserFactory, UserFactoryOptions } from './userFactory';
import { User } from './user';
import { AdminUser } from './adminUser';

const userFactory = new UserFactory();

const user1Opts: UserFactoryOptions = {
    rank: 'User',
    firstName: 'John',
    lastName: 'MayBerry'
};

const user2Opts: UserFactoryOptions = {
    rank: 'VIP',
    firstName: 'Mark',
    lastName: 'Hemster'
};

const user3Opts: UserFactoryOptions = {
    rank: 'Admin',
    firstName: 'Ryan',
    lastName: 'Chi'
}

const user1 = userFactory.createUser(user1Opts);
const user2 = userFactory.createUser(user2Opts);
const user3 = userFactory.createUser(user3Opts);

/**
 * Log a warning message showing the amount of warnings a user has
 * @param user 
 */
const userWarningMessage = (user: User) => console.log(`${user.firstName} has ${user.warnings} warnings`);

user1.greet(user2);
user2.greet(user1);
user3.greet(user2);

userWarningMessage(user1);

(user3 as AdminUser).warn(user1);

userWarningMessage(user1);

