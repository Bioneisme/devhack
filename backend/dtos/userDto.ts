// Data Transfer Object for User
export class UserDto {
    id: number;
    login?: string;
    phone?: string;
    name?: string;

    constructor(model: any) {
        this.id = model.id;
        this.login = model.login;
        this.phone = model.phone;
        this.name = model.name;
    }
}