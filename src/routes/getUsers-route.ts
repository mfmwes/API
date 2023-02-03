import express from 'express';
import { GetUsersController } from '../controllers/get-users/get-users';
import { MongoGetUsersRepository } from '../repositories/get-users/mongo-get-users';

const app = express();

export const getUsersRoute = app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();
    const getUsersController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersController.handle();
    res.status(statusCode).send(body);
  });