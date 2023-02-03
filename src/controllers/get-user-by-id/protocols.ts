import { Users } from "../../models/user";

export interface IGetUserByIdRepository {
  getUserById(userId: string): Promise<Users>;
}
