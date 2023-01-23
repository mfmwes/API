import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { Users } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<Users[]> {
    const users = await MongoClient.db
      .collection<Users>("users")
      .find({})
      .toArray();
    return users;
  }
}
