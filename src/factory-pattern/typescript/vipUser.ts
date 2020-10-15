import { User } from "./user";

export class VipUser extends User {
    /**
     * @param firstName 
     * @param lastName 
     */
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    /**
     * Greet a User
     * @param user 
     */
    public greet(user: User) {
        console.log(`Hello ${user.firstName} ${user.lastName}, I am a VIP user and my name is ${user.firstName} ${user.lastName}`);
    }

    /**
     * Insult a user
     * @param user 
     */
    public insult(user: User) {
        console.log(`You smell, ${user.firstName}`);
    }
}