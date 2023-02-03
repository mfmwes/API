import { Users } from "../../models/user";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IGetUserByIdRepository } from "./protocols";

export class GetUserByIdController implements IController {
  getUserByIdRepository: IGetUserByIdRepository;
  constructor(getUserByIdRepository: IGetUserByIdRepository) {
    this.getUserByIdRepository = getUserByIdRepository;
  }

  async handle(
    httppRequest: HttpRequest<unknown>
  ): Promise<HttpResponse<Users>> {
    try {
      const id = httppRequest?.params?.id;
      if (!id) {
        return {
          statusCode: 400,
          body: "missing user id",
        };
      }

      const user = await this.getUserByIdRepository.getUserById(id);
      return { statusCode: 200, body: user };
    } catch (error) {
      return {
        statusCode: 500,
        body: "something went wrong",
      };
    }
  }
}
