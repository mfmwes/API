import { ObjectId } from "mongodb";
import { IDeleteUserRepository } from "../../controllers/delete-user/protocols";
import { MongoClient } from "../../database/mongo";
import { Users } from "../../models/user";

export class MongoDeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(id: string): Promise<any> {
    const user = await MongoClient.db
      .collection<Users>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("User not found");
    }

    const { deletedCount } = await MongoClient.db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });
    if (!deletedCount) {
      throw new Error("User not deleted");
    }

    const userDeleted = "User successfully deleted";
    return userDeleted;
  }
}
