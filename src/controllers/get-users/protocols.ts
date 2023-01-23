import { Users } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
  handle():Promise<HttpResponse<Users[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<Users[]>
}

