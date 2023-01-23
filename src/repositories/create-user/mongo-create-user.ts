import { ICreateUserRepository } from "../../controllers/create-user/protocols";
import { MongoClient } from "../../database/mongo";
import { Users } from "../../models/user";

export class MongoCreateUser implements ICreateUserRepository {
  async createUser(params: Users): Promise<Users> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<Users>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("user not created");
    }

    return user;
  }
}
