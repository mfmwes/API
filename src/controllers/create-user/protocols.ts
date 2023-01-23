import { Users } from "../../models/user";



export interface ICreateUserController {
    handle(): void;
}

export interface ICreateUserRepository {
    createUser(params:Users):Promise<Users>;
}