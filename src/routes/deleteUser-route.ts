import express, { Request, Response } from "express";
import { DeleteUserController } from "../controllers/delete-user/delete-user";
import { MongoDeleteUserRepository } from "../repositories/delete-user/mongo-delete-user";

const app = express();

export const deleteUserRoute = async (req: Request, res: Response) => {
  const mongoDeleteUserReposiory = new MongoDeleteUserRepository();
  const deleteUserController = new DeleteUserController(
    mongoDeleteUserReposiory
  );

  const { body, statusCode } = await deleteUserController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
};
