import { Users } from "../../models/user";
import { HttpResponse, HttpRequest } from "../protocols";

export interface ICreateUserController {
  handle(httpRequest: HttpRequest<Users>): Promise<HttpResponse<Users>>;
}

export interface ICreateUserRepository {
  createUser(params: Users): Promise<Users>;
}
