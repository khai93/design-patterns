import { User } from "./user";

export class AdminUser extends User {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    public warn(user: User) {
        console.log('You have been warned')
    }
}