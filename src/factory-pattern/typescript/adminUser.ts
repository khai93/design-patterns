import { User } from "./user";

export class AdminUser extends User {
    /**
     * @param firstName 
     * @param lastName 
     */
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    /**
     * Greet a user
     * @param user 
     */
    public greet(user: User) {
        console.log(`Hi ${user.firstName} ${user.lastName}, I am an admin.`);
    }

    /**
     * Warn a User
     * @param user
     */
    public warn(user: User) {
        console.log(`You have been warned, ${user.firstName}.`);
        user.warnings = user.warnings + 1;
    }
}