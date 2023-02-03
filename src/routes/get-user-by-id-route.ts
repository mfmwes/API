import express, { Response, Request } from "express";
import { GetUserByIdController } from "../controllers/get-user-by-id/get-user-by-id";
import { MongoGetUserById } from "../repositories/get-user-by-id/mongo-get-user-by-id";

const app = express();

export const getUserByIdRoute = async (req: Request, res: Response) => {
  const mongoGetUserById = new MongoGetUserById();
  const getUserByIdController = new GetUserByIdController(mongoGetUserById);

  const { body, statusCode } = await getUserByIdController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
};
