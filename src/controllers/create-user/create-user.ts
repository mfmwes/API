import { Users } from "../../models/user";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { ICreateUserRepository } from "./protocols";
import validator from 'validator'

export class CreateUserController implements IController {
  createUserRepository: ICreateUserRepository;
  constructor(createUserRepository: ICreateUserRepository) {
    this.createUserRepository = createUserRepository;
  }
  async handle(httpRequest: HttpRequest<Users>): Promise<HttpResponse<Users>> {
    try {
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof Users]?.length) {
          return {
            statusCode: 400,
            body: `Field ${field} is required`,
          };
        }
      }
      const validateEmail = validator.isEmail(httpRequest.body.email)

      if (!validateEmail) {
        return {
          statusCode: 400,
          body:' email is invalid'
        }
      }

      const user = await this.createUserRepository.createUser(httpRequest.body);
      return {
        statusCode: 201,
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
