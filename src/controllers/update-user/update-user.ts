import { Users } from "../../models/user";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import {  IUpdateUserRepository } from "./protocols";

export class UpdateUserController implements IController {
  updateUserRepository: IUpdateUserRepository;
  constructor(updateUserRepository: IUpdateUserRepository) {
    this.updateUserRepository = updateUserRepository;
  }
  async handle(httppRequest: HttpRequest<any>): Promise<HttpResponse<Users>> {
    try {
      const id = httppRequest?.params?.id;
      const body = httppRequest?.body;
      if (!id) {
        return {
          statusCode: 400,
          body: "missing user id",
        };
      }

      const allowedFields = ["firstName", "lastName", "password"];
      const someFieldsNotAllowedToUpdate = Object.keys(body).some(
        (field) => !allowedFields.includes(field)
      );

      if (someFieldsNotAllowedToUpdate) {
        return {
          statusCode: 400,
          body: " some fields not allowed",
        };
      }

      const user = await this.updateUserRepository.updateUser(id, body);
      return { statusCode: 200, body: user };
    } catch (error) {
      return {
        statusCode: 500,
        body: "something went wrong",
      };
    }
  }
}
