export class User {
    private _firstName: string;
    private _lastName: string;
    private _warnings: number = 0;

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get warnings(): number {
        return this._warnings;
    }

    set warnings(Warnings: number) {
        this._warnings = Warnings;
    }

    /**
     * 
     * @param FirstName 
     * @param LastName 
     */
    public constructor (FirstName: string, LastName: string) {
        this._firstName = FirstName;
        this._lastName = LastName;
    }

    /**
     * Greet a User
     * @param user 
     */
    public greet(user: User) {
        console.log(`Hello ${user.firstName} ${user.lastName}, my name is ${this._firstName} ${this._lastName}`);
    }
}

