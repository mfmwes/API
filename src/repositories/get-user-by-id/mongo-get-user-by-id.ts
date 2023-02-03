import { Users } from "../../models/user";
import { MongoClient } from "../../database/mongo";
import { ObjectId } from "mongodb";
import { IGetUserByIdRepository } from "../../controllers/get-user-by-id/protocols";

export class MongoGetUserById implements IGetUserByIdRepository {
  async getUserById(userId: string): Promise<Users> {
    const user = await MongoClient.db
      .collection<Users>("users")
      .findOne({ _id: new ObjectId(userId) });

    if (!user) {
      throw new Error("user not found");
    }

    return user;
  }
}
