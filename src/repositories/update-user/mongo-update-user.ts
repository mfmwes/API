import { ObjectId } from "mongodb";
import {
  IUpdateUserRepository,
  UpdateUserParams,
} from "../../controllers/update-user/update-user";
import { MongoClient } from "../../database/mongo";
import { Users } from "../../models/user";

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: UpdateUserParams): Promise<Users> {
    await MongoClient.db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { params },
      }
    );

    const user = await MongoClient.db.collection<Users>("users").findOne({ _id: new ObjectId(id) })
    if (!user) {
        throw new Error ('user not updated')
    }

    return user;
  }
}
