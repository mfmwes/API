import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IDeleteUserRepository } from "./protocols";

export class DeleteUserController implements IController {
  deleteUserRepository: IDeleteUserRepository;
  constructor(deleteUserRepository: IDeleteUserRepository) {
    this.deleteUserRepository = deleteUserRepository;
  }
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return {
          statusCode: 400,
          body: "missing user id",
        };
      }
      const user = await this.deleteUserRepository.deleteUser(id);
      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "something went wrong",
      };
    }
  }
}
