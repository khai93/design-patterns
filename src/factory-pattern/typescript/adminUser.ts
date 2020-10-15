import { User } from "./user";

export class AdminUser extends User {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    public greet(user: User) {
        console.log(`Hi ${user.firstName} ${user.lastName}, I am an admin.`);
    }

    public warn(user: User) {
        console.log(`You have been warned, ${user.firstName}.`);
        user.warnings = user.warnings + 1;
    }
}