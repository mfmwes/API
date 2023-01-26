import { Users } from "../../models/user";
import { HttpRequest } from "../protocols";

export interface UpdateUserParams {
    firstName?:string;
    lastName?:string;
    password?:string;
}


export interface IUpdateUserController {
handle():Promise<HttpRequest<Users>>
}

export interface IUpdateUserRepository {
updateUser(id:string , params:UpdateUserParams) : Promise<Users>
}