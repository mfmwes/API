import express, { Response, Request } from "express";
import { CreateUserController } from "../controllers/create-user/create-user";
import { MongoCreateUserRepository } from "../repositories/create-user/mongo-create-user";

const app = express();

export const createUserRoute = async (req: Request, res: Response) => {
  const mongoCreateUsersRepository = new MongoCreateUserRepository();
  const createUserController = new CreateUserController(
    mongoCreateUsersRepository
  );

  const { body, statusCode } = await createUserController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
};
