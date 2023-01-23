import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { Users } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
 async getUsers(): Promise<Users[]> {
    return [
      {
        firstName: "wes",
        lastName: "Militão",
        email: "teste",
        password: "test",
      }
    ];
  }
}
