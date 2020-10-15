import { User } from "./user";

export class VipUser extends User {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    // Overriding inheried user greet
    public greet(user: User) {
        console.log(`Hello ${user.firstName} ${user.lastName}, I am a VIP user and my name is ${user.firstName} ${user.lastName}`);
    }

    public insult(user: User) {
        console.log(`You smell, ${user.firstName}`);
    }
}