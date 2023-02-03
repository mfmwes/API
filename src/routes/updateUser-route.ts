import express from 'express'
import { UpdateUserController } from '../controllers/update-user/update-user';
import { MongoUpdateUserRepository } from '../repositories/update-user/mongo-update-user';

const app = express()

export const updateUserRoute = app.patch("/users/:id", async (req, res) => {
    const mongoUpdateUserRepository = new MongoUpdateUserRepository();
    const updatedUserController = new UpdateUserController(
      mongoUpdateUserRepository
    );

    const { body, statusCode } = await updatedUserController.handle({
      body: req.body,
      params: req.params,
    });

    res.status(statusCode).send(body);
  });