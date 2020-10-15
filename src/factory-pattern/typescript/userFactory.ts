import { AdminUser } from "./adminUser";
import { User } from "./user";
import { VipUser } from "./vipUser";


export interface UserFactoryOptions {
    rank: string;
    firstName: string;
    lastName: string;
}

export class UserFactory {
    /**
     * Creates a user object based on options
     * @param userOptions 
     * @returns the created user
     */
    public createUser(userOptions: UserFactoryOptions): User | VipUser | AdminUser {
        switch(userOptions.rank.toLowerCase()) {
            case "user":
                const user = new User(userOptions.firstName, userOptions.lastName);
                return user;
            case "vip":
                const vipUser = new VipUser(userOptions.firstName, userOptions.lastName);
                return vipUser;
            case "admin":
                const adminUser = new AdminUser(userOptions.firstName, userOptions.lastName);
                return adminUser;
            default:
                throw new Error("Incorrect user rank!")
        }
    }
}