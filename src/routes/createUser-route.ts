import express from 'express';
import { CreateUserController } from '../controllers/create-user/create-user';
import { MongoCreateUserRepository } from '../repositories/create-user/mongo-create-user';

const app = express();

export const createUserRoute = app.post("/users", async (req, res) => {
    const mongoCreateUsersRepository = new MongoCreateUserRepository();
    const createUserController = new CreateUserController(
      mongoCreateUsersRepository
    );

    const { body, statusCode } = await createUserController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  });
